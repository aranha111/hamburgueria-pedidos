import { Product } from "../models/product.model.js";
export const productService = {
    async listAll() {
        return await Product.find().lean();
    },
    async create(data) {
        const created = await Product.create(data);
        return created.toObject();
    },
    async findById(id) {
        return await Product.findById(id).lean();
    },
    async updateById(id, data) {
        return await Product.findByIdAndUpdate(id, data, { new: true }).lean();
    },
    async deleteById(id) {
        return await Product.findByIdAndDelete(id).lean();
    }
};
