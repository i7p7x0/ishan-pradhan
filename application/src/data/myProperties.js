const calculateAge = () => {
  let dt = new Date();
  if (dt.getDate >= 13 && dt.getMonth >= 8) {
    return String(dt.getFullYear() - 1997);
  }
  return String(dt.getFullYear() - 1997 - 1);
};

const MY_PROPERTIES = [
  {
    key: "Age",
    value: calculateAge(),
  },
  {
    key: "Residence",
    value: "Nepal",
  },
  {
    key: "Address",
    value: "Karyabinayak, Lalitpur",
  },
  {
    key: "Email",
    value: "i7p7x0@gmail.com",
  },
  { key: "Phone Number", value: "+9779863213405" },
];

export default MY_PROPERTIES;
