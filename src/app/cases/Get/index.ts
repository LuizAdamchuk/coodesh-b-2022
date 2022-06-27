import { prismaClient } from "../../db/prismaClient";
import { PrismaCovidDataRepository } from "../../db/PrismaDataCovidRepository";
import { GetDataCovidController } from "./GetDataCovidController";
import { GetDataCovid } from "./GetDataCovid";

const prismaArticleRepository = new PrismaCovidDataRepository(prismaClient);

const getDataCovid = new GetDataCovid(prismaArticleRepository);

const getDataCovidController = new GetDataCovidController(getDataCovid);

export { getDataCovid, getDataCovidController };
