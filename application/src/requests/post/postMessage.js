const postMessage = async (name, emailAddress, subject, message) => {
  await fetch("http://localhost:5000/contact/", {
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
