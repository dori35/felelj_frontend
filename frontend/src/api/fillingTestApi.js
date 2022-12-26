import { shuffle } from "../state/utils/utils";
import { request } from "./request";

class FillingTestApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
  }

  async get(token, testId, userId) {
    const test = await request(
      `${this.resourcePath}/${testId}/${userId}`,
      {},
      token
    );
    if (!!test && test.random) {
      shuffle(test.tasks);
    }
    return test;
  }
  async send(token, testId, userId, answers, startDate) {
    const answerData = {
      answers,
      startDate,
    };
    await request(
      `${this.resourcePath}/${testId}/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(answerData),
      },
      token
    );
  }
}

export const fillingTestApi = new FillingTestApi("/fillingtest");
