import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
console.log("TEST:", process.env.TEST);
console.log("NODE_ENV:", process.env.NODE_ENV);

/*****************|
|* SET UP ROUTES *| 
|*****************/
// Setup app to serve static files from React App depending on production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
}

app.get('/api/test', (req, res) => {
  const { TEST, NODE_ENV } = process.env;
  res.send(`${TEST} | ${NODE_ENV}`);
})

app.get('*', (req, res) => {
  console.log("dirname: ", __dirname);
  res.sendFile(path.join("index.html"));
})


app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
