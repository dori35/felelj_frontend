import { request } from "./request";

class TestResultsApi {
  constructor(resourcePath) {
    this.resourcePath = resourcePath;
  }

  async getAll(token, testId, userId) {
    let results = [];
    try {
      results = await request(
        `${this.resourcePath}/${testId}/${userId}`,
        {},
        token
      );
    } catch (error) {
      console.log("hibaa");
    }
    console.log(results);
    return results;
  }
}

export const testResultsApi = new TestResultsApi("/testresults");
