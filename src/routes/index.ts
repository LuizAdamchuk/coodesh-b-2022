import { Router } from "express";
import dataCovidRouter from "./data.routes";

const router = Router();
router.use("/", dataCovidRouter);

export default router;
