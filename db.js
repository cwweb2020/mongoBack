import mongoose from "mongoose";
import dotenv from "dotenv";

// Configura dotenv para cargar las variables de entorno
dotenv.config();

// Obtén la URI de la base de datos desde las variables de entorno
const mongoUri = process.env.MONGODB_URI;

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(mongoUri);
    console.log(`Conectado a MongoDB `);
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1); // Termina el proceso con un código de error
  }
};

// Exporta la función de conexión
export default connectDB;
