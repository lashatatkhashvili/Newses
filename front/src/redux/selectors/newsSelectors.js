export const selectNewses = (state) => {
  return state.news.data;
};

export const selectNewsesStatus = (state) => {
  return state.news.status;
};
