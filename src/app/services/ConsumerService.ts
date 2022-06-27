import axios from "axios";
import { prismaClient } from "../db/prismaClient";
import { createData } from "../cases/Create/";
import { ICreateDataRequestDTO } from "../cases/Create/CreateDataDTO";

export class ConsumerService {
  public async saveLogCron(quantity: number) {
    await prismaClient.cronJob.create({
      data: {
        quantity,
      },
    });
  }

  public async saveDatas(datas: ICreateDataRequestDTO[]) {
    const data = datas.map((d) => ({
      location: d.location,
      variant: d.variant,
      date: d.date,
      num_sequences: d.num_sequences,
      perc_sequences: d.perc_sequences,
      num_sequences_total: d.num_sequences_total,
    }));
    await prismaClient.covidData.createMany({ data });
  }
}
