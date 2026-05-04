
import Payment from "@/models/Payment";
import connectDB from "@/db/connectdb";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Users from "@/models/Users";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData()
    body = Object.fromEntries(body)

    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({success:false,message:"OrderId not Found"})
    }
    let user = await Users.findOne({username:p.to_user});
    const razorpaysecret = user.razorpaySecret
    let v = await validatePaymentVerification({
        "order_id": body.razorpay_order_id,
        "payment_id": body.razorpay_payment_id,
    },
        body.razorpay_signature,
        razorpaysecret
    )
    if (v) {
        const updatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true })
        const baseUrl = process.env.NEXT_PUBLIC_URL || req.nextUrl.origin;
        return NextResponse.redirect(`${baseUrl}/${updatePayment.to_user}?paymentdone=true`)
    } else {
        return NextResponse.json({success:false,message:'Payment Verication failed'})
    }
}
