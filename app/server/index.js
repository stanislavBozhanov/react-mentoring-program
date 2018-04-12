import app from './app';

const port = 3232;

app.listen(port);

app.listen(port, () => console.log('Listening on port 3232!'));
