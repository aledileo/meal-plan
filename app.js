const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});