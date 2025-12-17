import { z } from "zod";
import { productService } from "../services/product.service.js";
export const productController = {
    async list(req, reply) {
        const items = await productService.listAll();
        return reply.send(items);
    },
    async create(req, reply) {
        const schema = z.object({ name: z.string(), price: z.number() });
        const payload = schema.parse(req.body);
        const created = await productService.create(payload);
        return reply.status(201).send(created);
    },
    async getById(req, reply) {
        const params = z.object({ id: z.string() }).parse(req.params);
        const product = await productService.findById(params.id);
        if (!product)
            return reply.status(404).send({ error: "Produto não encontrado" });
        return reply.send(product);
    },
    async update(req, reply) {
        const params = z.object({ id: z.string() }).parse(req.params);
        const body = z.object({ name: z.string().optional(), price: z.number().optional() }).parse(req.body);
        const updated = await productService.updateById(params.id, body);
        if (!updated)
            return reply.status(404).send({ error: "Produto não encontrado" });
        return reply.send(updated);
    },
    async remove(req, reply) {
        const params = z.object({ id: z.string() }).parse(req.params);
        const deleted = await productService.deleteById(params.id);
        if (!deleted)
            return reply.status(404).send({ error: "Produto não encontrado" });
        return reply.status(204).send();
    }
};
