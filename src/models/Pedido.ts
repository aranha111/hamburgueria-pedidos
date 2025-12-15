import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema(
  {
    status: { type: String, default: "pendente" },

    itens: [
      {
        nome: { type: String, required: true },
        quantidade: { type: Number, required: true },
        preco: { type: Number, required: true },
      }
    ]
  },
  { timestamps: true }
);

export const Pedido = mongoose.model("Pedido", PedidoSchema);
