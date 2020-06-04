const request = require('request');
const fs = require('fs');

const website = process.argv[2];
const fileName = process.argv[3];

request(website, (error, response, body) => {
  if(error) {
    console.log('error:', error); 
  } else {
    fs.writeFile(fileName,response && body , 'utf8', () => {
      const stats = fs.statSync(fileName);
      const fileSizeInBytes = stats["size"];
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileName}`);
    });
  }
});

// var stats = fs.statSync(filename)
//     var fileSizeInBytes = stats["size"]
//     return fileSizeInBytes