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
    window.sessionStorage.setItem("token", response.token);
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
    const newUser = await request("/signup", {
      method: "POST",
      body: JSON.stringify(newUserData),
    });
    console.log(newUser);
    return newUser;
  }

  getToken() {
    return window.sessionStorage.getItem("token");
  }
}

export const authApi = new AuthApi();
