import { request } from "./request";

class RestApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
    this.convertFn = convertFn;
  }

  async getAll(token, userId) {
    const tests = await request(this.resourcePath, {}, token, userId);
    return tests.map(this.convertFn);
  }
}

const convertTestsIds = (tests) => ({
  ...tests,
  id: tests.id.toString(),
});

export const createdTestsApi = new RestApi("/createdtestdtos", convertTestsIds);

export const completedTestsApi = new RestApi(
  "/completedtestdtos",
  convertTestsIds
);
