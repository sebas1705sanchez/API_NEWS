import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

import articlesRouter from "./routes/articles.js";
import breackingEventsRouter from "./routes/breakingEvents.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;

// Define la ruta estática para servir archivos HTML
app.use("/api", express.static(path.join(__dirname, "public")));

app.use("/api", articlesRouter);
app.use("/api", breackingEventsRouter);

app.listen(PORT, () => {
    console.clear();
    console.log("Server running on port: " + PORT);
});
