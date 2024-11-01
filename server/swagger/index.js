const express = require('express');
const swaggerDocs = require('./swagger');

const app = express();
const port = 3000;

app.use(express.json());

// Your routes go here

swaggerDocs(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
