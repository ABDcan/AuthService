const express = require('express');
const app = express();

const {PORT} = require('./src/config/serverConfig');
const prepareAndStartServer = () => {
    app.listen(PORT,async()=>{
        console.log(`Server started at port ${PORT}`);
    });
}
prepareAndStartServer();