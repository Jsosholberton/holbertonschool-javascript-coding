const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const students = data.split('\n').slice(1);

    const csStudentsList = [];
    const sweStudentsList = [];

    for (let student of students) {
      student = student.split(',');
      if (student[3] === 'CS') {
        csStudentsList.push(student[0]);
      } else if (student[3] === 'SWE') {
        sweStudentsList.push(student[0]);
      }
    }
    console.log(`Number of students: ${csStudentsList.length + sweStudentsList.length}`);
    console.log(`Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
