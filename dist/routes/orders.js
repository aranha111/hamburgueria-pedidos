import { Order } from "../models/order.model.js";
import { z } from "zod";
export async function ordersRoutes(app) {
    // ===========================
    // LISTAR PEDIDOS
    // ===========================
    app.get("/orders", async () => {
        return await Order.find();
    });
    // ===========================
    // CRIAR PEDIDO
    // ===========================
    app.post("/orders", async (req, reply) => {
        const schema = z.object({
            status: z.enum(["pendente", "preparo", "pronto"]).optional(),
            items: z.array(z.object({
                nome: z.string(),
                quantidade: z.number(),
                preco: z.number(),
            })),
        });
        const data = schema.parse(req.body);
        const order = await Order.create(data);
        return reply.status(201).send(order);
    });
    // ===========================
    // ATUALIZAR STATUS
    // ===========================
    app.put("/orders/:id", async (req, reply) => {
        const idParamSchema = z.object({
            id: z.string(),
        });
        const bodySchema = z.object({
            status: z.enum(["pendente", "preparo", "pronto"]),
        });
        const { id } = idParamSchema.parse(req.params);
        const { status } = bodySchema.parse(req.body);
        const updatedOrder = await Order.findByIdAndUpdate(id, { status }, {
            new: true, // 🔥 DEVOLVE O DOCUMENTO ATUALIZADO
            runValidators: true
        });
        if (!updatedOrder) {
            return reply.status(404).send({ error: "Pedido não encontrado" });
        }
        // 🔥 ISSO É O QUE FAZ O FRONT ATUALIZAR
        return reply.send(updatedOrder);
    });
    // ===========================
    // DELETAR PEDIDO
    // ===========================
    app.delete("/orders/:id", async (req, reply) => {
        const paramsSchema = z.object({
            id: z.string(),
        });
        const { id } = paramsSchema.parse(req.params);
        const deleted = await Order.findByIdAndDelete(id);
        if (!deleted) {
            return reply.status(404).send({ error: "Pedido não encontrado" });
        }
        return reply.status(204).send();
    });
}
