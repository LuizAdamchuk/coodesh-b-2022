import { Request, Response } from "express";
import { GetDataCovid } from "./GetDataCovid";

export class GetDataCovidController {
  constructor(private getDataCovid: GetDataCovid) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const res = await this.getDataCovid.execute();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
