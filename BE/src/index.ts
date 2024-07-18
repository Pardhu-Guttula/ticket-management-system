import express from "express";
import cors from "cors";
import caseRoutes from "./interface/routes/caseRoutes";
import setupSwagger from "./utils/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", caseRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
