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

  async deleteTest(token, userId, testId) {
    await request(
      `${this.resourcePath}/${userId}/${testId}`,
      {
        method: "DELETE",
      },
      token
    );
  }
}

const convertTestsIds = (tests) => ({
  ...tests,
  id: tests.id.toString(),
});

export const completedTestsApi = new RestApi(
  "/completedtestdtos",
  convertTestsIds
);
