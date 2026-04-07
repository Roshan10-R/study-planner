import express from "express"
import cors from "cors";
import agentRoutes from "./routes/agentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", agentRoutes);
//const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});