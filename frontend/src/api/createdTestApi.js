import { request } from "./request";

class CreatedTestsApi {
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

export const createdTestsApi = new CreatedTestsApi(
  "/createdtestdtos",
  convertTestsIds
);
