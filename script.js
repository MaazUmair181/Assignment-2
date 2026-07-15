
//  Task 1 – Greeting User

// let greetUser = prompt("Please enter your name:");
// let userAge = prompt("Please enter your age:");
// if (greetUser) {
//     alert("Hello, " + greetUser + "! Welcome to our website.");
// }

// console.log(greetUser + " is " + userAge + " years old.");



//  Task 2 – Student Grade

// function checkGrade(marks) {
//   if (marks >= 80) {
//     console.log("A Grade");
//   } else {
//     if (marks >= 70) {
//       console.log("B Grade");
//     } else {
//       if (marks >= 60) {
//         console.log("C Grade");
//       } else {
//         if (marks >= 50) {
//           console.log("Pass");
//         } else {
//           console.log("Fail");
//         }
//       }
//     }
//   }
// }

// // Calling the function
// checkGrade(95);  // A Grade
// checkGrade(75);  // B Grade
// checkGrade(65);  // C Grade
// checkGrade(55);  // Pass
// checkGrade(30);  // Fail

// Task 3 – Even Numbers



// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 4 – Reverse Counting

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }


// Task 5 – Array Operations

// let names = ["Ali", "Ahmed", "Sara", "Zain"];

// names.push("Fatima");
// console.log(names); // ["Ali", "Ahmed", "Sara", "Zain", "Fatima"]

// names.shift();
// console.log(names); // ["Ahmed", "Sara", "Zain", "Fatima"]

// names.unshift("Usman");
// console.log(names); // ["Usman", "Ahmed", "Sara", "Zain", "Fatima"]

// names.pop();
// console.log(names); // ["Usman", "Ahmed", "Sara", "Zain"]

// console.log(names);


// Task 6 – Slice and Splice

// let numbers = [10, 20, 30, 40, 50, 60];

// let sliced = numbers.slice(1, 4);

// numbers.splice(2, 2);


// console.log("Sliced array:", sliced);
// console.log("Original array after splice:", numbers);

// Task 7 – object

// let student = {
//   name: "Ali",
//   age: 22,
//   city: "Karachi",
//   course: "Web Development"
// };

// // // Print the name and city
// // console.log(student.name);
// // console.log(student.city);

// // Task 8 – Array of Objects

// let students = [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 92 },
//   { name: "Ahmed", marks: 65 },
//   { name: "Zain", marks: 50 }
// ];

// // Part A: Use map()
// let names = students.map(student => student.name);
// console.log(names); 

// // Part B: Use forEach()
// students.forEach(student => {
//   console.log(`${student.name} scored ${student.marks} marks.`);
// });

// Bonus Challenge

// function findTopper(students) {
//   let topper = students[0];

//   for (let i = 1; i < students.length; i++) {
//     if (students[i].marks > topper.marks) {
//       topper = students[i];
//     }
//   }

//   console.log("Topper: " + topper.name);
//   console.log("Marks: " + topper.marks);
// }

// findTopper(students);