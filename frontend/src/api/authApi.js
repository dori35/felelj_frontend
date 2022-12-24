import { request } from "./request";

class AuthApi {
  async login(identifier, password) {
    const authData = {
      identifier,
      password,
    };
    const response = await request("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(authData),
    });
    if (!!response.token) {
      window.sessionStorage.setItem("token", response.token);
    }
    return response;
  }

  async signup(name, password, identifier, email, role) {
    const newUserData = {
      name,
      password,
      identifier,
      email,
      role,
    };
    const response = await request("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(newUserData),
    });
    return response;
  }

  logout() {
    window.sessionStorage.removeItem("token");
  }

  getToken() {
    return window.sessionStorage.getItem("token");
  }

  async getUserByIdentifier(userIdentifier, token) {
    const user = await request(`/login/users/${userIdentifier}`, {}, token);
    return user;
  }

  async getUserById(userId, token) {
    const profile = await request(`/userdtos/${userId}`, {}, token);
    return profile;
  }
}

export const authApi = new AuthApi();
