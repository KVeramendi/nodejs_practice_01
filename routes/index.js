import express from "express";
import productos from "../components/producto/routes"
const router = express.Router();
router.use("/productos", productos);
export default router;