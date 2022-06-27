export interface IDataCovidRepository {
  get(): Promise<any>;
  getCumulative(date): Promise<any>;
  listAll(date): Promise<any>;
}
