const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('JWT Authentication Server');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
