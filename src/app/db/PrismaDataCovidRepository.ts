import { PrismaClient } from "@prisma/client";
import { IGetDataCovidResponseDTO } from "../cases/Get/GetDataCovidDTO";
import { IGetDataCovidCumulativeResponseDTO } from "../cases/GetCumulative/GetDataCovidDTO";

import { IDataCovidRepository } from "../repositories/IDataCovidRepository";

export class PrismaCovidDataRepository implements IDataCovidRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async get(): Promise<IGetDataCovidResponseDTO> {
    const result = await this.prisma.$queryRaw`
    SELECT 
    DISTINCT ON (date)
    date
    FROM covid_data cd 
    ORDER BY date`;
    return result;
  }
  async getCumulative(date): Promise<IGetDataCovidCumulativeResponseDTO> {
    const result = await this.prisma.$queryRaw`
    SELECT
    SUM(num_sequences::DECIMAL)
    FROM covid_data cd 
    WHERE "date" <= ${date}
    `;
    return result;
  }

  async listAll(date): Promise<IGetDataCovidCumulativeResponseDTO> {
    const result = await this.prisma.$queryRaw`
      SELECT
      DISTINCT (variant), 
      location, "date", num_sequences, num_sequences_total
      FROM public.covid_data
      WHERE "date" = ${date}
      AND num_sequences <> '0'
      AND variant <> 'non_who'
      ORDER BY location
    `;
    return result;
  }
}
