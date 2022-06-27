import { IDataCovidRepository } from "../../repositories/IDataCovidRepository";

export class GetDataCovidCumulative {
  constructor(private dataCovidRepository: IDataCovidRepository) {}

  async execute(date) {
    const result = await this.dataCovidRepository.getCumulative(date);
    return result;
  }
}
