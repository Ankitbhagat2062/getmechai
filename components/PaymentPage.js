'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useraction'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const router = useRouter();
    const SearchParams = useSearchParams();
    const [paymentform, setpaymentform] = useState({name:"user123", message:"Donated successfully", amount:""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (SearchParams.get('paymentdone') === 'true' ) {
            toast('🦄 Payment has been made!');
            router.push(`/${username}`)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let p = await fetchpayments(username)
        setPayments(p)
    }
console.log(currentUser, payments)
    const pay = async (amount) => {
        let o = await initiate(amount, username, paymentform)
        const baseUrl = window.location.origin;
        let orderId = o.id
        var options = {
            "key": currentUser.razorpayId,
            "amount": o.amount,
            "currency": "INR",
            "name": "",
            "description": "",
            "image": `${baseUrl}/tea.gif`,
            "order_id": orderId,
            "callback_url": `${baseUrl}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@gmail.com",
                "contact": "9100000000",
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
        };
        var rzpl = new Razorpay(options);
        rzpl.open()
    }
    return (
        <>
            <Script src='https://checkout.razorpay.com/v1/checkout.js'></Script>
            <div className="cover relative w-full h-80 bg-red-50">
                <img className='object-cover w-full h-full' src={currentUser.coverPicture} alt="Cover Image" />
                <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-15 left-1/2 transform -translate-x-1/2 rounded-full border-2 overflow-hidden size-20 sm:size-24 md:size-32 border-gray-300">
                    <img alt="creator-public-page-avatar" className="rounded-full size-20 sm:size-24 md:size-32" src={currentUser.profilePicture} />
                </div>
            </div>
            <div className="info flex justify-center items-center my-14 flex-col gap-2">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-slate-400">
                    lets help {username} to get a Tea
                </div>
                <div className='text-slate-400'>
                    {payments?.length} Payments.  {payments?.reduce((a,b)=>a+b.amount,0)} raised
                </div>
            </div>
            <div className="payment w-full px-4 md:w-[80%] mx-auto flex flex-col md:flex-row gap-3">
                <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-5 md:p-10">
                    {/* Show list of all Supporters as a Leaderboard  */}
                    <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
                    <ul className='mx-5'>
{payments.length === 0 ?
                            (<h1>No Payments yet</h1>)
                            : payments.map((p, i) => (
                                <li key={i} className='my-2 flex gap-2 items-center'>
                                    <img src="avatar.gif" width={30} alt="user avatar" />
                                    <span className='text-sm'>
                                        {p.name} donated <span className='font-bold'>${p.amount}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="makePayments w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-5 md:p-10">
                    <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
                    <div className='mb-5'>
                        <p className='mb-3'>Choose an amount:</p>
                        <div className='flex gap-2 mb-3 flex-wrap'>
                            <button onClick={() => pay(5)} className=' cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'>$5</button>
                            <button onClick={() => pay(10)} className=' cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'>$10</button>
                            <button onClick={() => pay(20)} className=' cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'>$20</button>
                            <button onClick={() => pay(50)} className=' cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'>$50</button>
                        </div>
                        <input name='amount' onChange={(e) => handleChange(e)} value={paymentform.amount} type='number' placeholder='Custom amount' className='w-full p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='mb-5'>
                        <label className='block mb-2 font-semibold'>Your Name:</label>
                        <input name='name' onChange={(e) => handleChange(e)} value={paymentform.name} type='text' placeholder='Enter your name' className='w-full p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='mb-5'>
                        <label className='block mb-2 font-semibold'>Leave a message (optional):</label>
                        <textarea name='message' onChange={(e) => handleChange(e)} value={paymentform.message} className='w-full p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500' rows='3' placeholder='Your message...'></textarea>
                    </div>
                    <button onClick={() => pay(Number.parseInt(paymentform.amount))} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount.length < 1} className='w-full cursor-pointer disabled:bg-green-200 disabled:hover:bg-green-300 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold transition'>Support Now</button>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
