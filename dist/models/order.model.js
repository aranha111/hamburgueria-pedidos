import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
});
const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["pendente", "preparo", "pronto"],
        default: "pendente",
    },
    items: {
        type: [orderItemSchema],
        required: true,
    },
}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema);
