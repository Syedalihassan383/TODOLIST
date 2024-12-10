
const responsehandler = require("../responsehandler");
const { getAlluser } = require("../routes/userRouter");
const { createuser,getAllusers ,updateuser,deleteuser}=require("../models/usermodel");
const {hash}= require("bcryptjs");
const {v4:uuid}= require("uuid");

module.exports =
{
    create:async (req , res)=>{
        
        try {
            console.log(req.body);
            req.body.userid =uuid();
          
            
            req.body.password =await hash(req.body.password,10);
            
            
           const response = await createuser(req.body);
          
            return responsehandler(res,response);
            }
         catch (error) {
            return responsehandler(res,error)

            
        }
    },
        getAll:async (req,res)=>{
            try {
                const response = await getAllusers();
                // if (response.error){
                //     return responsehandler(res,req.error);   
                // }
               return responsehandler(res,response);
                //  return responsehandler(res,req.query);
                
            } catch (error) {
                return responsehandler(res,{error:error})
                
            }
        },
    
        update :async(req ,  res)=>{
            try {
                const response = await updateuser(req.body);
                return responsehandler(res,response.response    );
                // return responsehandler(res,req.body);
                
            } catch (error) {
                return responsehandler(res,{error:error})
            }
        },
    
        deleteUser:async (req,res)=>{
            try {
                const response = await deleteuser(req.query);
                return responsehandler(res,response.response    );
               
                    
            } catch (error) {
                return responsehandler(res,{error:error})
            }
        }
    
    };








// const createuser =(req,res)=>{
// //  return   res.send("user request in conroller");

// const { response } = require("express");


// // };
// // const getAlluser=(req,res)=>{
// //     return res.send("get All users");
// // };
// // module.exports ={createuser , getAlluser}; 
// const {hash}=require("bcryptjs")
// module.exports ={
//     createuser :(req,res)=>{
//        try {return res.send({
//         status:"ok",
//         code :"200",response:req.body,
//        });
        
//        } catch (error) {
//         return res.send({
//             status:"error",
//             code:"400",
//             error:"request not found",
            
//         });
        
//        }
//     },
//     getalluser:(req,res)=>{
       
//         return res.send ("get all user");
//     },
//     updateuser:(req,res)=>{
       
//         return res.send ("updatuser");
//     },

// };