import { profileApi } from "../../api/profileApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_PROFILE = "SET_PROFILE";

// Sync
export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

// Async
export const fetchProfile = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      const profile = await profileApi.getUserById(userId, token);
      dispatch(setProfile(profile));
    })
  );
