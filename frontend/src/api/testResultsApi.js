import { request } from "./request";

class TestResultsApi {
  constructor(resourcePath) {
    this.resourcePath = resourcePath;
  }

  async getAll(token, testId, userId) {
    const results = await request(
      `${this.resourcePath}/${testId}/${userId}`,
      {},
      token
    );
    return results;
  }
}

export const testResultsApi = new TestResultsApi("/testresults");
