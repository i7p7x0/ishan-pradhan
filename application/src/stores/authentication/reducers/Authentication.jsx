import {
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
  LOGIN_FAILED,
} from "../actions/Authentication";

const initialState = {
  token: localStorage.getItem("token"),
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      console.log("admin logged in ");
      let loginState = {
        token: action.token,
      };
      state = loginState;
      break;
    case LOGOUT_ADMIN:
      console.log("admin logged out");
      state = initialState;
      break;
    case LOGIN_FAILED:
      console.log("Reached");
      let failedLoginState = {
        token: "invalid",
      };
      state = failedLoginState;
      break;

    default:
      state = initialState;
      break;
  }
  return state;
};
