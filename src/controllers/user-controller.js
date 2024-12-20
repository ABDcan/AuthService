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
  
    const signIn = async (req,res)=>{
        try{
            const response  = await userservice.signIn(req.body.email,req.body.password);
            return res.status(200).json({
                success:true,
                message:'Successfully signed in',
                data:response,
                err:{}
            });
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                message:'Something went wrong',
                data:{},
                success:false,
                err:error
                });
            }
        }
        const  isAuthenticated = async (req,res)=>{
            try{
                const token = req.headers['x-access-token'];
                const response = await userservice.isAuthenticated(token);
                return res.status(200).json({
                    success:true,
                    err:{},
                    data:response,
                    message:'User is authenticated and token is valid'
                });
            }
            catch(error){
                console.log(error);
                return res.status(500).json({
                    message:'Something went wrong',
                    data:{},
                    success:false,
                    err:error
                    });
                }
            }
                const isAdmin = async(req,res)=>{
                    try{
                        const response = await userservice.isAdmin(req.body.id);
                        return res.status(200).json({
                            success:true,
                            err:{},
                            data:response,
                            message:'Successfully fetched whether user is admin or not'
                        });
                    }
                    catch(error){
                        console.log(error);
                        return res.status(500).json({
                            message:'Something went wrong',
                            data:{},
                            success:false,
                            err:error
                            });
                        }
                }
    
    

    module.exports = {
        create,
        signIn,
        isAuthenticated,
        isAdmin
    }