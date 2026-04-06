import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String, required: true },
    oid: { type: String, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
export default Payment;
