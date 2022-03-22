export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const LOGOUT_ADMIN = "LOGOUT_ADMIN";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginAdmin = (token) => {
  return {
    type: LOGIN_ADMIN,
    token: token,
  };
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT_ADMIN,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};
