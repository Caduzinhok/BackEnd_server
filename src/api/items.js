const express = require('express')
const {spawn} = require('child_process');
const router  = express.Router()

const items = [
    {
        id: '1',
        name: 'Teste',
        completed: false
    }

]
router.get('/', (req, res) => {
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', [__dirname + '/../python/script1.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    // res.send(dataToSend);
    res.json({
        'name': dataToSend,
        'id': 1,
    })
    });
})

module.exports = router;