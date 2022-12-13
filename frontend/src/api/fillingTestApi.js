import { shuffle } from "../state/utils/utils";
import { request } from "./request";

class FillingTestApi {
  async get(token, testId) {
    const test = await request(`/fillingtestdtos/${testId}`, {}, token);
    if (test.random) {
      shuffle(test.tasks);
    }
    return test;
  }
  async send(token, testId, userId, answers) {
    const answerData = {
      answers,
    };
    await request(
      `/fillingtestdtos/${testId}/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(answerData),
      },
      token
    );
  }
}

export const fillingTestApi = new FillingTestApi();
