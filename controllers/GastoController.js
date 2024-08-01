import GastoModel from "../models/GastoModel.js";

export const filterGastos = async (req, res) => {
  let { year, month } = req.query;

  // Obtén el año y el mes actuales si no se proporcionan
  const currentDate = new Date();
  if (!year) {
    year = currentDate.getFullYear().toString();
  }
  if (!month) {
    month = (currentDate.getMonth() + 1).toString(); // getMonth() devuelve el índice del mes (0-11)
  }

  const yearNumber = parseInt(year, 10);
  const monthNumber = parseInt(month, 10);

  if (
    isNaN(yearNumber) ||
    isNaN(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12
  ) {
    return res.status(400).json({ error: "Invalid year or month" });
  }

  try {
    const startDate = new Date(
      `${yearNumber}-${String(monthNumber).padStart(2, "0")}-01T00:00:00Z`
    );
    const endDate = new Date(
      `${yearNumber}-${String(monthNumber + 1).padStart(2, "0")}-01T00:00:00Z`
    );

    console.log("Start Date:", startDate.toISOString());
    console.log("End Date:", endDate.toISOString());

    const gastos = await GastoModel.find({
      created_at: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    console.log("Gastos Found:", gastos.length);
    console.log("Gastos Data:", gastos);

    res.status(200).json(gastos);
  } catch (error) {
    console.error("Error fetching gastos:", error);
    res.status(500).json({ error: error.message });
  }
};
