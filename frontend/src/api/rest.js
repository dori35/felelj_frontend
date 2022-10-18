const BASE_URL = "http://localhost:8080";

const request = async (path = "") => {
  let url = `${BASE_URL}${path}`;
  const response = await fetch(url);
  return response.json();
};

class RestApi {
  constructor(resourcePath, convertFn) {
    this.resourcePath = resourcePath;
    this.convertFn = convertFn;
  }

  async getAll() {
    const json = await request(this.resourcePath);
    console.log(json);
    const tests = json._embedded.tests;
    console.log(tests);
    return tests.map(this.convertFn);
  }
}

const convertTestsIds = (tests) => ({
  ...tests,
  //id: tests.id.toString(),
});

export const createdTestsApi = new RestApi("/tests", convertTestsIds);
