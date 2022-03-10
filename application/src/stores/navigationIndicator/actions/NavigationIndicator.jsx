export const SET_NAVIGATION = "SET_NAVIGATION";



export const setNavigation = (page) => {
  return {
    type: SET_NAVIGATION,
    page: page,
  };
};
