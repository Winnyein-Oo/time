import { Router } from "express";
import * as controllers from "./users.controllers.js";

const router = Router();

router.get("/", controllers.getAll);

export default router;
