import express from "express";
import dotenv from "dotenv";
import path from "path"; // trabajar con rutas de archivos
import { fileURLToPath } from 'url'; // obtener la ruta de un archivo

import articlesRouter from "./routes/articles.js";
import breackingEventsRouter from "./routes/breakingEvents.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url); // obtener la rita actual del archivo
const __dirname = path.dirname(__filename); // obtiene la direccion del archivo actual

const PORT = process.env.PORT || 4000;

// Define la ruta estática para servir archivos HTML
app.use("/api", express.static(path.join(__dirname, "public")));

/* configurar routers
middleware permite que las peticiones http se procesen antes de que se llamen los controladores
modularizacion de las rutas facilita la organizacion y el mantenimiento del proyecto
*/
app.use("/api", articlesRouter);
app.use("/api", breackingEventsRouter);

app.listen(PORT, () => {
    console.clear();
    console.log("Server running on port: " + PORT);
});
