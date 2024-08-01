import mongoose from "mongoose";

// Define el esquema para el modelo Gasto
const gastoSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "gastos", // Nombre de la colección en MongoDB
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

// Crea el modelo Gasto
const GastoModel = mongoose.model("Gasto", gastoSchema);

export default GastoModel;
