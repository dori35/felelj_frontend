import { request } from "./request";

class CompletedTestsApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
    this.convertFn = convertFn;
  }

  async getAll(token, userId) {
    let tests = [];
    try {
      tests = await request(this.resourcePath, {}, token, userId);
      if (!!tests.error) {
        console.log("error completed");
        return tests;
      } else {
        return tests.map(this.convertFn);
      }
    } catch (error) {
      console.log("getall completed");
      return tests;
    }
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
