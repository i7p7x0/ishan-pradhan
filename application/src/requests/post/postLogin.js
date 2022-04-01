const postLogin = async (username, password) => {
  await fetch(process.env.REACT_APP_BACKEND_URL+"/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};
export default postLogin;
