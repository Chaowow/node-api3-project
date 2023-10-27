const server = require('./api/server');

const port = 9000;

server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});