import cors from "cors";
import { main as connectDB } from "./config/database";
import express, { Application, Request, Response } from "express";
import { taskRoutes } from "./routes/taskRoutes";
import { routesInfo } from "./routes/routesInfo";

export const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Task Manager API is On! Welcome...",
    routes: routesInfo,
  });
});

app.use("/api/", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
