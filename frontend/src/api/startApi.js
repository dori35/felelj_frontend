import { shuffle } from "../state/utils/utils";
import { request } from "./request";

class StartApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
  }

  async settingStartTest(token, testId, userId, url, startTime) {
    const startData = {
      url,
      startTime,
    };
    await request(
      `${this.resourcePath}/${userId}/${testId}`,
      {
        method: "PUT",
        body: JSON.stringify(startData),
      },
      token
    );
  }

  async getStartTest(token, url) {
    const test = await request(`${this.resourcePath}/${url}`, {}, token);
    if (!!test && test.random) {
      shuffle(test.tasks);
    }
    return test;
  }

  async getResults(token, url, userId) {
    const results = await request(
      `${this.resourcePath}/results/${url}/${userId}`,
      {},
      token
    );

    return results;
  }
}

export const startApi = new StartApi("/starttest");
