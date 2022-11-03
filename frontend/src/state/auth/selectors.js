export const getIsLoggedIn = (state) => {
  return !!state.auth.identifier;
};
export const getToken = (state) => state.auth.token;
export const getUserId = (state) => state.auth.id;
export const getRoles = (state) => state.auth.roles;
