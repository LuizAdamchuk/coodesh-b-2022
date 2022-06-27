import "dotenv/config";
import cors from "cors";
import express from "express";
import { cronGetCovidDataCsvToJson } from "./scripts/cronGetCovidDataCsvToJson";
import router from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

cronGetCovidDataCsvToJson();

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
