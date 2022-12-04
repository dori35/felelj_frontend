import { request } from "./request";

class FillingTestApi {
  async get(token, testId) {
    const tests = await request(`/fillingtestdtos/${testId}`, {}, token);
    return tests;
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
