import cors from "cors";
import { main as connectDB } from "./config/database";
import express, { Application, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";
import { taskRoutes } from "../src/routes/taskRoutes";
import { routesInfo } from "./routes/routesInfo";

export const app: Application = express();
const PORT = process.env.PORT || 9000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/", taskRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Bem vindo ao Task Manager API!",
    routes: routesInfo,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
