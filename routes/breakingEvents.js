import { Router } from "express";
import { getBreakingEvents } from "../controllers/breakingEventsController.js";

const router = Router();

router.get("/breaking", getBreakingEvents);

export default router;