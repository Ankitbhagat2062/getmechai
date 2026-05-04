'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useState } from 'react'
import { fetchuser, updateprofile } from '@/actions/useraction';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [formData, setFormData] = useState({ name: '', email: '', username: '', profilePicture: null, coverPicture: null, razorpayId: '', razorpaySecret: '' });
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push('/login');
        }else{
            getData()
        }
    }, [session, router])
    const getData = async ()=>{
        let u = await fetchuser(session.user.name)
        setFormData(u)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        let a = await updateprofile(e, session.user.name)
        toast("Profile Updated")
    }
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-white text-3xl font-bold mb-8">Welcome to your Dashboard, {session?.user?.name}</h2>

                <form action={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor='name' className="block text-gray-300 text-sm mb-2">Name</label>
                        <input type="text" name='name' id='name' value={formData.name ? formData.name : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='email' className="block text-gray-300 text-sm mb-2">Email</label>
                        <input type="email" name='email' id='email' value={formData.email ? formData.email : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='username' className="block text-gray-300 text-sm mb-2">Username</label>
                        <input type="text" name='username' id='username' value={formData.username ? formData.username : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='profilePicture' className="block text-gray-300 text-sm mb-2">Profile Picture</label>
                        <input type="text" name='profilePicture' id='profilePicture' value={formData.profilePicture ? formData.profilePicture : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='coverPicture' className="block text-gray-300 text-sm mb-2">Cover Picture</label>
                        <input type="text" name='coverPicture' id='coverPicture' value={formData.coverPicture ? formData.coverPicture : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='razorpayId' className="block text-gray-300 text-sm mb-2">Razorpay Id</label>
                        <input type="text" name='razorpayId' id='razorpayId' value={formData.razorpayId ? formData.razorpayId : ""} onChange={handleChange}
                            className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>

                    <div>
                        <label htmlFor='razorpaySecret' className="block text-gray-300 text-sm mb-2">Razorpay Secret</label>
                        <input type="text" name='razorpaySecret' id='razorpaySecret' value={formData.razorpaySecret ? formData.razorpaySecret : ""} onChange={handleChange} className="w-full bg-slate-700 text-white rounded px-4 py-2" />
                    </div>


                    <button type="submit" className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard
