const calculateAge = () => {
  let dt = new Date();
  if (dt.getDate >= 13 && dt.getMonth >= 8) {
    return String(dt.getFullYear() - 1997);
  }
  return String(dt.getFullYear() - 1997 - 1);
};

const calculateYearsOfExperience = () => {
  let dt = new Date();
  if (dt.getDate >= 18 && dt.getMonth >= 9) {
    return String(dt.getFullYear() - 2018) + " + Years | 18, Sept - Now";
  }
  return String(dt.getFullYear() - 2018 - 1) + " + Years | 18, Sept - Now";
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
    key: "Email",
    value: "i7p7x0@gmail.com",
  },
  {
    key: "Address",
    value: "Karyabinayak, Lalitpur",
  },
  { key: "Phone Number", value: "+9779863213405" },
  { key: "Experience", value: calculateYearsOfExperience() },
];

export default MY_PROPERTIES;
