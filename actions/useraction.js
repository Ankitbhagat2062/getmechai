'use server'
import Razorpay from 'razorpay'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectdb'
import Users from '@/models/Users'

const serialize = (data) => JSON.parse(JSON.stringify(data));

export const initiate = async (amount, to_user, paymnetfom) => {
    await connectDB()
    const paymentAmount = Number(amount);
    if (!Number.isFinite(paymentAmount) || paymentAmount <= 0) {
        throw new Error('Please enter a valid payment amount.');
    }

    let user = await Users.findOne({ username: to_user });
    if (!user?.razorpayId || !user?.razorpaySecret) {
        throw new Error('This creator has not added Razorpay keys yet.');
    }

    const razorpaysecret = user.razorpaySecret
    var instance = new Razorpay({ key_id: user.razorpayId, key_secret: razorpaysecret })

    let options = {
        amount: Math.round(paymentAmount * 100),
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: {
            key1: 'value2',
            key2: 'value3'
        },
    }
    let x;
    try {
        x = await instance.orders.create(options)
    } catch (error) {
        throw new Error(error?.error?.description || error?.message || 'Unable to create Razorpay order.')
    }

    const data = await Payment.create({ oid: x.id, amount: paymentAmount, to_user: to_user, name: paymnetfom.name, message: paymnetfom.message })
    console.log(data)   
    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await Users.findOne({ username: username }).lean();
    if (!u) return null;
    return serialize(u)
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return serialize(p)
}

export const updateprofile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    if (oldusername !== ndata.username) {
        let u = await Users.findOne({ username: ndata.username })
        if (u) {
            return { error: 'Username Already Exist' }
        }
        await Users.updateOne({ email: ndata.email }, ndata)
        await Payment.updateMany({ to_user:oldusername }, {to_user:ndata.username})
    } else {
        await Users.updateOne({ email: ndata.email }, ndata)
    }
}
