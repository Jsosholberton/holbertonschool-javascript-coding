const fs = require('fs').promises;

async function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const students = data.split('\n').slice(1);

      const StudentsList = [];

      for (let student of students) {
        student = student.split(',');
        StudentsList.push(student);
      }
      return StudentsList;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = readDatabase;
