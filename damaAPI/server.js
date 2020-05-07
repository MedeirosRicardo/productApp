const app = require('./app');

const HTTP_PORT = process.env.port || 3000;

app.listen(HTTP_PORT);