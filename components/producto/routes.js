import express from "express";
import {getProductos} from "./controller";
const router = express.Router();

router.get("/", getProductos);
export default router;