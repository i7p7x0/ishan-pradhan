const categories = [
  {
    id: 1,
    category: "About Me",
    subCategories: [
      {
        id: "a",
        subCategory: "Bio",
        changeType: [
          {
            id: "1a1",
            changeType: "update",
          },
        ],
      },
      {
        id: "b",
        subCategory: "Properties",
        changeType: [{ id: "1b1", changeType: "update" }],
      },
      {
        id: "c",
        subCategory: "What I Do",
        changeType: [
          { id: "1c1", changeType: "add" },
          { id: "1a2", changeType: "update" },
          { id: "1a3", changeType: "delete" },
        ],
      },
      {
        id: "d",
        subCategory: "Skill Set",
        changeType: [
          { id: "1d1", changeType: "add" },
          { id: "1d2", changeType: "delete" },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Resume",
    subCategories: [
      ,
      {
        id: "e",
        subCategory: "Education",
        changeType: [
          { id: "2ed1", changeType: "add" },
          { id: "2ed2", changeType: "update" },
          { id: "2ed3", changeType: "delete" },
        ],
      },
      {
        id: "f",
        subCategory: "Experience",
        changeType: [
          { id: "2f1", changeType: "add" },
          { id: "2f2", changeType: "update" },
          { id: "2f3", changeType: "delete" },
        ],
      },
      {
        id: "g",
        subCategory: "Top Skills",
        changeType: [{ id: "2g1", changeType: "update" }],
      },
    ],
  },
  {
    id: 3,
    category: "Contact",
    subCategories: [
      {
        id: "h",
        subCategory: "Contact Method",
        changeType: [{ id: "3h1", changeType: "update" }],
      },
    ],
  },
];

export default categories;
