import axios from "axios";
import cron from "node-cron";
import csvToJson from "csvtojson";
import { ConsumerService } from "../app/services/ConsumerService";
import { prismaClient } from "../app/db/prismaClient";
import { DateUtils } from "../utils/Date";

const cronGetCovidDataCsvToJson = async () => {
  cron.schedule(
    "0 */1 * * * *",
    async () => {
      const consumerService = new ConsumerService();
      const dateUtils = new DateUtils();

      console.log(
        "[START] [cronGetCovidDataCsvToJson] ",
        dateUtils.parsedEpochToString(new Date().getTime())
      );

      const response = await axios.get(
        "https://challenges.coode.sh/covid/data/covid-variants.csv",
        { responseType: "blob" }
      );
      const file = response.data.toString();
      const cronJob = await prismaClient.cronJob.findFirst({
        orderBy: { id: "desc" },
      });
      const total = file.length;
      let cronJobQuantity = cronJob?.quantity || 0;

      if (cronJobQuantity !== total) {
        try {
          console.log("API synchronization");
          await consumerService.saveLogCron(total);
          console.log("Lenght:", total);

          const parsedToJson = await csvToJson({
            delimiter: [";", ","],
          }).fromString(file);

          await consumerService.saveDatas(parsedToJson);
        } catch (error) {
          const random = Math.random();
          console.log("Something go wrong, email send to alerts@email.com");
          console.log("Error ID", random);
          console.log(error);
        }
      }
      console.log("API syncronized");
      console.log(
        "[STOP] [cronArticle] - ",
        dateUtils.parsedEpochToString(new Date().getTime())
      );
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo",
    }
  );
};

export { cronGetCovidDataCsvToJson };
