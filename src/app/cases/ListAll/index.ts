import { prismaClient } from "../../db/prismaClient";
import { PrismaCovidDataRepository } from "../../db/PrismaDataCovidRepository";
import { ListAllArticleController } from "./ListAllArticleController";
import { ListAllArticle } from "./ListAllArticle";

const prismaArticleRepository = new PrismaCovidDataRepository(prismaClient);

const listAllArticle = new ListAllArticle(prismaArticleRepository);

const listAllArticleController = new ListAllArticleController(listAllArticle);

export { listAllArticle, listAllArticleController };
