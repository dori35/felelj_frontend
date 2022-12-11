import { request } from "./request";

class CompletedTestsApi {
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

export const completedTestsApi = new CompletedTestsApi(
  "/completedtestdtos",
  convertTestsIds
);
