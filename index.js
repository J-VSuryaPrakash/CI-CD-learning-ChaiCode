import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.status(200).send({'message': 'Server is healthy and successfully able to connect via http://210.79.128.162:8000/'});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
