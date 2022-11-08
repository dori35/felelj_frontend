import { request } from "./request";

class ProfileApi {
  async getUserById(userId, token) {
    const profile = await request(`/userdtos/${userId}`, {}, token);
    return profile;
  }
}

export const profileApi = new ProfileApi();
