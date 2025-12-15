import Fastify from "fastify";
import cors from "@fastify/cors";
import { ordersRoutes } from "./routes/orders";
import { productsRoutes } from "./routes/products";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const app = Fastify();

app.register(cors, {
  origin: "http://localhost:5173",
});

app.register(ordersRoutes);
app.register(productsRoutes);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("🔥 MongoDB conectado!");
    app.listen({ port: 3333 }).then(() => {
      console.log("🔥 Servidor rodando em http://localhost:3333");
    });
  })
  .catch((err) => console.error(err));
