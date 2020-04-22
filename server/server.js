import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

/*****************|
|* SET UP ROUTES *| 
|*****************/
app.get('/api/test', (req, res) => {
  const { TEST, NODE_ENV } = process.env;
  res.send(`${TEST} | ${NODE_ENV}`);
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')));
}

app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
