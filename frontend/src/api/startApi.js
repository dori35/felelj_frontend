import { shuffle } from "../state/utils/utils";
import { request } from "./request";

class StartApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
    this.convertFn = convertFn;
  }

  async settingStartTest(token, testId, userId, url, startTime) {
    const startData = {
      url,
      startTime,
    };
    await request(
      `${this.resourcePath}/${userId}/${testId}`,
      {
        method: "POST",
        body: JSON.stringify(startData),
      },
      token
    );
  }

  async get(token, url) {
    const test = await request(`/alma/${url}`, {}, token);
    if (test.random) {
      shuffle(test.tasks);
    }
    return test;
  }
}

export const startApi = new StartApi("/startTest");
