const BASE_URL = "http://localhost:8080";

export const request = async (path = "", options = {}, token, userId) => {
  let url = `${BASE_URL}${path}`;
  const headers = {
    Authorization: `Bearer ${token}`,
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
  const response = await fetch(url, {
    ...options,
    headers,
  });
  return response.json();
};
