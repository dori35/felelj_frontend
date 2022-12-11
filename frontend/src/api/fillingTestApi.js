import { request } from "./request";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
