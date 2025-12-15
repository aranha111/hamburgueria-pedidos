import mongoose from "mongoose";

export async function connectToDatabase() {
  const uri = process.env.DB_URI;

  if (!uri) {
    throw new Error("❌ ERRO: Variável DB_URI não encontrada no .env");
  }

  await mongoose.connect(uri);
  console.log("🔥 Conectado ao MongoDB!");
}
