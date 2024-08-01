import express from "express";
import { filterGastos } from "../controllers/GastoController.js";

const router = express.Router();

// Ruta para obtener gastos filtrados por año y mes
router.get("/filter", filterGastos);

export default router;
