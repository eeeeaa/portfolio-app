let education = {
  name: "Chulalongkorn University",
  type: "Bachelor's Degree",
  department: "International School of Engineering (ISE)",
  major: "Information and Communication Engineering (ICE)",
  gpa: 3.41,
  gpaType: "2nd class honor",
  studyDuration: "2017 - 2021",
  graduateDate: "July 2021",
  relevantCourses: [
    {
      title: "Software Enginnering",
      key: 0,
    },
    {
      title: "Database System",
      key: 1,
    },
    {
      title: "Fundamental Data structure and Algorithms",
      key: 2,
    },
    {
      title: "Computer Programming (Java and Python)",
      key: 3,
    },
    {
      title: "Probability and Statistics",
      key: 4,
    },
  ],
  images: [],
};

export function getEducationData() {
  return education;
}
