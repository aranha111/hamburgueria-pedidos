import { Product } from "../models/product.model.js";
import { z } from "zod";
export async function productsRoutes(app) {
    // ===========================
    // LISTAR TODOS OS PRODUTOS
    // ===========================
    app.get("/products", async () => {
        const products = await Product.find();
        return products;
    });
    // ===========================
    // CRIAR UM NOVO PRODUTO
    // ===========================
    app.post("/products", async (req, reply) => {
        const productBodySchema = z.object({
            name: z.string(),
            price: z.number(),
        });
        const { name, price } = productBodySchema.parse(req.body);
        const newProduct = await Product.create({
            name,
            price,
        });
        return reply.status(201).send(newProduct);
    });
    // ===========================
    // DELETAR PRODUTO POR ID
    // ===========================
    app.delete("/products/:id", async (req, reply) => {
        const idParamSchema = z.object({
            id: z.string(),
        });
        const { id } = idParamSchema.parse(req.params);
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted) {
            return reply.status(404).send({ error: "Produto não encontrado" });
        }
        return { message: "Produto deletado com sucesso" };
    });
    // ===========================
    // ATUALIZAR PRODUTO POR ID
    // ===========================
    app.put("/products/:id", async (req, reply) => {
        const idParamSchema = z.object({
            id: z.string(),
        });
        const productBodySchema = z.object({
            name: z.string(),
            price: z.number(),
        });
        const { id } = idParamSchema.parse(req.params);
        const { name, price } = productBodySchema.parse(req.body);
        const updated = await Product.findByIdAndUpdate(id, { name, price }, { new: true });
        if (!updated) {
            return reply.status(404).send({ error: "Produto não encontrado" });
        }
        return updated;
    });
}
