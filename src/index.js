const express = require('express');
const {spawn} = require('child_process');
const api     = require('./api');
const app     = express();
const port    = 3001;
const cors    = require('cors');
app.get('/', (req, res) => {
 app.json({
     message: 'Está Funcionando'
 })
});

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  };

app.use(cors(corsOptions));
app.use('/api', api);

app.listen(port, () => console.log(`Example app listening on port 
${port}!`));