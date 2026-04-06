'use server'
import Razorpay from 'razorpay'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectdb'
import Users from '@/models/Users'

export const initiate = async (amount, to_user, paymnetfom) => {
    await connectDB()
    let user = await Users.findOne({ username: to_user });
    const razorpaysecret = user.razorpaySecret
    var instance = new Razorpay({ key_id: user.razorpayId, key_secret: razorpaysecret })

    let options = {
        amount: Number.parseInt(amount * 100),
        currency: 'INR',
        receipt: 'receipt#1',
        nots: {
            key1: 'value2',
            key2: 'value3'
        },
    }
    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: amount, to_user: to_user, name: paymnetfom.name, message: paymnetfom.message })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await Users.findOne({ username: username });
    if (!u) return null;
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p
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