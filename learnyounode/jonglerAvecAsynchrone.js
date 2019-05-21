const http = require('http');

const [node, path, ...urls] = process.argv;
const result = {};

urls.forEach(url => {
  const chunks = [];

  http.get(url , res => {
    res.setEncoding('utf8');

    res.on('data', chunks.push);

    res.on('end', () =>{
      result[url] = chunks.join('');
      const values = Object.values(result)
      
      if(values.length === urls.length){
        values.forEach(line => console.log(line));
      }
    });
  });
});
