import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    coverPicture: { type: String },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
export default mongoose.models.User || mongoose.model('User', userSchema);