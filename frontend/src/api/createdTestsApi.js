import { request } from "./request";

class CreatedTestsApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
    this.convertFn = convertFn;
  }

  async getAll(token, userId) {
    let tests = [];
    try {
      tests = await request(this.resourcePath, {}, token, userId);
      if (!!tests.error) {
        console.log("error created");
        return tests;
      } else {
        return tests.map(this.convertFn);
      }
    } catch (error) {
      console.log("getall created");
      return tests;
    }
  }

  async modifyTest(token, userId, testId, title, subject, random, tasks) {
    const testData = {
      title,
      subject,
      random,
      tasks,
    };
    let a = await request(
      `${this.resourcePath}/${userId}/${testId}`,
      {
        method: "POST",
        body: JSON.stringify(testData),
      },
      token
    );
    console.log(a);
  }

  async newTest(token, userId, title, subject, random, tasks) {
    const testData = {
      title,
      subject,
      random,
      tasks,
    };
    await request(
      `${this.resourcePath}/newTest/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(testData),
      },
      token
    );
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
  "/createdtest",
  convertTestsIds
);
