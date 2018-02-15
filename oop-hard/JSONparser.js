let fs = require('fs')

class JSONparser {
  constructor() {

  }
  static writeBookData(data) {
    fs.writeFile('./book_data.json', data, 'utf8', function(err, data){
      if (err) {
        console.log(err);
      } else {
        console.log('saving to book_data.json succesful');
      }
    });
  }

  static writeReaderData(data) {
    fs.writeFile('./reader_data.json', data, 'utf8', function(err, data){
      if (err) {
        console.log(err);
      } else {
        console.log('saving to reader_data.json succesful');
      }
    });
  }
}

module.exports = JSONparser
