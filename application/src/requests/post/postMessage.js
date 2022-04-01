const postMessage = async (name, emailAddress, subject, message) => {
  await fetch(process.env.REACT_APP_BACKEND_URL+"/contact/", {
    method: "POST",
    headers: { "Content-Type": "Application/Json" },
    body: JSON.stringify({
      name: name,
      emailAddress: emailAddress,
      subject: subject,
      message: message,
    }),
  });
};
export default postMessage;
