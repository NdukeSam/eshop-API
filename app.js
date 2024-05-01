const express = require('express')

const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.listen(3000, ()=> {
  console.log(api);
  console.log('Server running http://localhost:3000');
})

app.get('/', (req, res)=> {
  res.send('Hello API!')
})
const func = () => {
  return "hello";
};

func()

// function String(letters) {
//   this.letters = letters;
// }
