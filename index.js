import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.status(200).send({'message': 'Server is healthy and successfully and set up workflow for deploying containerized images', "status": "Github Actions"});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
