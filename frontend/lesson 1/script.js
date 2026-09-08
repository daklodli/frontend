const student = {
  name: "Anna",
  age: 20,
  city: "Yerevan",
  skills: ["HTML", "CSS", "JavaScript"]
};

const getStudentInfo = (studentObj) => {
  const { name, age, city, skills } = studentObj;

  const status = age >= 18 ? "Adult" : "Minor";

  const reactStatus = skills.includes("React") ? "Knows React" : "Doesn't know React";

  return `${name} is ${age} years old and lives in ${city}. Status: ${status}. ${reactStatus}.`;
};

console.log(getStudentInfo(student));
