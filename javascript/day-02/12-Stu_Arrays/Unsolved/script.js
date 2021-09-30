// WRITE YOUR CODE HERE
// Declare the students array
var students = ["Sarah", "Julia", "Henry", "Jack", "Bob"];

//console.log the number of students
console.log(students.length);

//console.log message to each element of the array
console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
console.log("Welcome to the class " + students[4]);

//replace the first element of the array
students[0] = "Junior";

//after confirm the change of the first student console.log message
if (students[0] === "Junior") {
  console.log(students[0] + " is in class");
}
