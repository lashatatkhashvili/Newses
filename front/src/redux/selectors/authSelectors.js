export const selectUser = (state) => {
  return state.auth.user;
};

export const selectUserStatus = (state) => {
  return state.auth.status;
};
