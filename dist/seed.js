import "dotenv/config";
import mongoose from "mongoose";
import { Order } from "./models/order.model.js";
async function seed() {
    try {
        // 🔌 Conecta no Mongo
        await mongoose.connect(process.env.MONGO_URL);
        console.log("🗑️ Limpando pedidos antigos...");
        await Order.deleteMany();
        console.log("🌱 Criando 20 pedidos...");
        await Order.create([
            {
                status: "pendente",
                items: [
                    { nome: "Hamburguer Duplo", quantidade: 1, preco: 22 },
                    { nome: "Refrigerante Lata", quantidade: 1, preco: 6 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "Hamburguer Triplo", quantidade: 2, preco: 25 },
                    { nome: "Batata Grande", quantidade: 1, preco: 14 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "X-Bacon", quantidade: 1, preco: 20 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "X-Salada", quantidade: 2, preco: 18 },
                    { nome: "Suco Natural", quantidade: 2, preco: 8 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "Hamburguer Artesanal", quantidade: 1, preco: 30 },
                    { nome: "Batata Média", quantidade: 1, preco: 10 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "Cheeseburger", quantidade: 3, preco: 15 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "Hot Dog", quantidade: 2, preco: 12 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "Hamburguer Vegano", quantidade: 1, preco: 28 },
                    { nome: "Refrigerante 600ml", quantidade: 1, preco: 10 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "X-Frango", quantidade: 2, preco: 19 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "X-Tudo", quantidade: 1, preco: 32 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "Hamburguer Duplo", quantidade: 2, preco: 22 },
                    { nome: "Batata Pequena", quantidade: 1, preco: 8 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "Cheddar Burger", quantidade: 1, preco: 24 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "X-Calabresa", quantidade: 2, preco: 21 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "Hamburguer Triplo", quantidade: 1, preco: 25 },
                    { nome: "Milkshake", quantidade: 1, preco: 15 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "X-Burger", quantidade: 3, preco: 14 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "Hamburguer Artesanal", quantidade: 2, preco: 30 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "X-Salada", quantidade: 1, preco: 18 },
                    { nome: "Refrigerante Lata", quantidade: 2, preco: 6 }
                ]
            },
            {
                status: "pronto",
                items: [
                    { nome: "X-Bacon", quantidade: 2, preco: 20 }
                ]
            },
            {
                status: "pendente",
                items: [
                    { nome: "Hamburguer Vegano", quantidade: 1, preco: 28 }
                ]
            },
            {
                status: "preparo",
                items: [
                    { nome: "X-Tudo", quantidade: 2, preco: 32 },
                    { nome: "Batata Grande", quantidade: 1, preco: 14 }
                ]
            }
        ]);
        console.log("✅ Seed finalizado com sucesso!");
    }
    catch (error) {
        console.error("❌ Erro ao rodar seed:", error);
    }
    finally {
        await mongoose.disconnect();
        process.exit(0);
    }
}
seed();
