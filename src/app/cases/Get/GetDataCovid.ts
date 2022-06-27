import { IDataCovidRepository } from "../../repositories/IDataCovidRepository";

export class GetDataCovid {
  constructor(private dataCovidRepository: IDataCovidRepository) {}

  async execute() {
    const result = await this.dataCovidRepository.get();
    return result;
  }
}
