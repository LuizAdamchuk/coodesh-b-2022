import { Request, Response } from "express";
import { GetDataCovidCumulative } from "./GetDataCovidCumulative";

export class GetDataCovidCumulativeController {
  constructor(private getDataCovidCumulative: GetDataCovidCumulative) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;
    try {
      const res = await this.getDataCovidCumulative.execute(date);
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
