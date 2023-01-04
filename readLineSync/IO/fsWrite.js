// https://nodejs.org/api/fs.html
const fs = require('fs');

const write_file = (file_name, content_report) => {
  fs.appendFile(`${file_name}.txt`, content_report, (err) => {
    if (err) throw err;
    console.log('erro throw!');
  });

}

module.exports = {
  write_file
}
