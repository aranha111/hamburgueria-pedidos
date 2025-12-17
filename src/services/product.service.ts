import { Product } from "../models/product.model.js";

export const productService = {
  async listAll() {
    return await Product.find().lean();
  },

  async create(data: { name: string; price: number }) {
    const created = await Product.create(data);
    return created.toObject();
  },

  async findById(id: string) {
    return await Product.findById(id).lean();
  },

  async updateById(id: string, data: Partial<{ name: string; price: number }>) {
    return await Product.findByIdAndUpdate(id, data, { new: true }).lean();
  },

  async deleteById(id: string) {
    return await Product.findByIdAndDelete(id).lean();
  }
};
