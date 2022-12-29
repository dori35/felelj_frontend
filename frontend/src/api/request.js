const BASE_URL = "http://localhost:8080";

export const request = async (path = "", options = {}, token, userId) => {
  let url = `${BASE_URL}${path}`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (userId) {
    url += `/${userId}`;
  }
  let response = {};
  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch (error) {
    console.log("error");
  }
  return response.json();
};
