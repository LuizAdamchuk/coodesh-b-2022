import { Router } from "express";
import { getDataCovidController } from "../app/cases/GetCumulative";
import { listAllArticleController } from "../app/cases/ListAll";

const dataCovidRouter = Router();

dataCovidRouter.get("/dates", (request, response) => {
  return getDataCovidController.handle(request, response);
});

dataCovidRouter.get("/cases/:date/cumulative", (request, response) => {
  return getDataCovidController.handle(request, response);
});

dataCovidRouter.get("/cases/count/:date", (request, response) => {
  return listAllArticleController.handle(request, response);
});

export default dataCovidRouter;
