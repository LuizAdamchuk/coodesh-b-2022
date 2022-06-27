export class DataCovid {
  public id: string;
  public created_at: string;
  public location: string;
  public variant: string;
  public date: string;
  public num_sequences: number;
  public perc_sequences: number;
  public num_sequences_total: number;

  constructor(props: Omit<DataCovid, "id" | "created_at">) {
    Object.assign(this, props);
  }
}
