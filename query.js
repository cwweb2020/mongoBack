import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("gasto");

    // Usar un rango de fechas más amplio
    const startDate = new Date("2024-07-01T00:00:00Z");
    const endDate = new Date("2024-08-01T00:00:00Z");

    const query = {
      created_at: {
        $gte: startDate,
        $lt: endDate,
      },
    };

    const gastos = await collection.find(query).toArray();
    console.log("Gastos:", gastos);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
