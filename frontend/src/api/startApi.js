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

  async get(token, url) {
    const test = await request(`${this.resourcePath}/${url}`, {}, token);
    if (test.random) {
      shuffle(test.tasks);
    }
    return test;
  }
}

export const startApi = new StartApi("/starttest");
