const express = require('express');


const app = express();

app.get('/', (req, res) => res.send('Hello world'));

app.listen(3232, () => console.log('Listening on port 3232!'));
