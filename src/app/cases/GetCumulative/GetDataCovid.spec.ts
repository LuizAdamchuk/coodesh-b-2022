import { GetDataCovid } from "./GetDataCovid";
import FakeArticlesRepository from "../../../repositories/fakes/FakesArticlesRepository";

describe("getDataCovidService", () => {
  let prismaArticleRepository: FakeArticlesRepository;
  let getDataCovidService: GetDataCovid;

  beforeAll(() => {
    prismaArticleRepository = new FakeArticlesRepository();

    getDataCovidService = new GetDataCovid(prismaArticleRepository);
  });

  it("should execute be called", async () => {
    const spyGetDataCovidService = jest.spyOn(getDataCovidService, "execute");

    const expectedResult = {
      id: 1,
      title: "teste",
      featured: false,
      imageUrl: "teste",
      newsSite: "teste",
      summary: "teste",
      publishedAt: "teste",
      url: "teste",
      updatedAt: "teste",
    };

    const result = await getDataCovidService.execute(1);

    expect(spyGetDataCovidService).toBeCalled();
    expect(result).toEqual(expectedResult);
  });

  it("should be return error if article not found", async () => {
    await expect(getDataCovidService.execute(3)).rejects.toBeInstanceOf(Error);
  });
});
