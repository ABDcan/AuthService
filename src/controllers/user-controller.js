const userService = require('../services/user-service');

const userservice = new userService();

const create =  async (req,res) => {
    try{
        const response = await userservice.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            success:true,
            message:'Successfully created a new user',
            data:response,
            err:{}
        });
    }
    catch(error){
        console.log(error);
        console.log(req.body);
        return res.status(500).json({
            message:'Something went wrong',
            data:{},
            success:false,
            err:error
            });
        }
    }
    
    module.exports = {
        create
    }