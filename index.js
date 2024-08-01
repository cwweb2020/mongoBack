import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import gastoRoutes from "./routes/gastoRoutes.js";

dotenv.config();

// Configura el puerto del servidor
const PORT = process.env.PORT || 8500;

// Crea una instancia de Express
const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Conexión a la base de datos
const mongoUri = process.env.MONGODB_URI; // Reemplaza con tu URI de MongoDB

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Define una ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

// Configurar las rutas
app.use("/gastos", gastoRoutes); // Aquí se monta el enrutador

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
