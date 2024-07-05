import express from "express";
import dotenv from "dotenv";

import articlesRouter from "./routes/articles.js";
import breackingEventsRouter from "./routes/breakingEvents.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api", articlesRouter);
app.use("/api", breackingEventsRouter);

app.listen(PORT, () => {
  console.clear();
  console.log("Server running on port: " + PORT);
});
