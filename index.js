const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes/index');
// const userRepository = require('./src/repository/user-repository');
const prepareAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    //  const repository = new userRepository();
    // const response = await repository.getById(4);
    // console.log(response);
    app.listen(PORT,async()=>{
        console.log(`Server started at port ${PORT}`);
    });
}
prepareAndStartServer();