import Fastify from "fastify";
import cors from "@fastify/cors";
import { ordersRoutes } from "./routes/orders";
import { productsRoutes } from "./routes/products";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify();

// ✅ CORS liberado (depois podemos restringir)
app.register(cors, {
  origin: true,
});

// ✅ Rotas
app.register(ordersRoutes);
app.register(productsRoutes);

// ✅ Porta dinâmica (OBRIGATÓRIO no Render)
const PORT = Number(process.env.PORT) || 3333;

// ✅ Conexão com Mongo
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("🔥 MongoDB conectado!");

    app.listen({ port: PORT, host: "0.0.0.0" }).then(() => {
      console.log(`🔥 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no MongoDB:", err);
  });
