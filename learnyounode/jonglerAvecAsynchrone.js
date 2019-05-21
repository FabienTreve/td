const http = require('http');

const [node, path, ...urls] = process.argv;
const result = {};

urls.forEach((url) => {

  let strResult = "";

  http.get(url , (res) => {
    res.setEncoding('utf8');

    res.on('data', (data) => {
      strResult += data;
    });

    res.on('end', () =>{
      result[url] = strResult;
      if(Object.values(result).length === urls.length){
        Object.values(result).forEach(line => console.log(line));
      }
    });
  });
});
