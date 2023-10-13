import readDatabase from '../utils';

class StudentController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const csListStudents = [];
        const sweListStudents = [];
        for (const student of data) {
          if (student[3] === 'CS') {
            csListStudents.push(student[0]);
          } else if (student[3] === 'SWE') {
            sweListStudents.push(student[0]);
          }
        }
        csListStudents.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        sweListStudents.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        res.send(`This is the list of our students\nNumber of students in CS: ${csListStudents.length}. List: ${csListStudents.join(', ')}\nNumber of students in SWE: ${sweListStudents.length}. List: ${sweListStudents.join(', ')}`);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const majors = ['CS', 'SWE'];
        if (!majors.includes(req.params.major)) {
          res.status(500);
          res.send('Major parameter must be CS or SWE');
          return;
        }
        const listStudents = [];
        for (const student of data) {
          if (student[3] === req.params.major) {
            listStudents.push(student[0]);
          }
        }
        listStudents.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        res.send(`List: ${listStudents.join(', ')}`);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }
}

module.exports = StudentController;
