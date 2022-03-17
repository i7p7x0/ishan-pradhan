const postLogin = async (username, password) => {
  await fetch("http://localhost:5000/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};
export default postLogin;
