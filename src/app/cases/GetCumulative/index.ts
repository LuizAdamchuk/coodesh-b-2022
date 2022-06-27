import { prismaClient } from "../../db/prismaClient";
import { PrismaCovidDataRepository } from "../../db/PrismaDataCovidRepository";
import { GetDataCovidCumulativeController } from "./GetDataCovidCumulativeController";
import { GetDataCovidCumulative } from "./GetDataCovidCumulative";

const prismaArticleRepository = new PrismaCovidDataRepository(prismaClient);

const getDataCovid = new GetDataCovidCumulative(prismaArticleRepository);

const getDataCovidController = new GetDataCovidCumulativeController(
  getDataCovid
);

export { getDataCovid, getDataCovidController };
