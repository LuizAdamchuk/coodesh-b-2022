import { IDataCovidRepository } from "../../repositories/IDataCovidRepository";

export class ListAllArticle {
  constructor(private dataCovidRepository: IDataCovidRepository) {}

  async execute(date) {
    const result = await this.dataCovidRepository.listAll(date);
    return result;
  }
}
