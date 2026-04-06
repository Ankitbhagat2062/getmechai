import PaymentPage from '@/components/PaymentPage';
import connectDB from '@/db/connectdb';
import Users from '@/models/Users';
import { notFound } from 'next/navigation';
import React from 'react'

const Username = async({ params }) => {
    const  plot  = await params
    const username = plot.username;
    const check = async ()=>{
        await connectDB()
        let user = await Users.findOne({username:username})
        if (!user) {
            return notFound()
        } 
    }
    await check();
        return (
            <>
                <PaymentPage username={username} />
            </>
        )
}

export default Username

export async function generateMetadata({params}) {
    const param = await params
    return {
        title:`Support ${param.username} - Get Me A Tea`
    }
}
