const express = require('express');
const loaders = require('./loaders');
const port = process.env.PORT || 3000;

async function startServer() {
    const app = express();

    await loaders.init(app);

    app.listen(port, () => {
        console.log(`code green API server started on ${port}`);
    });
}


 startServer();
