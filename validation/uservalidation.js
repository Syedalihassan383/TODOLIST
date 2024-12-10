const { createuser } = require("../controllers/usercontroler");
const joi = require ("joi");
const responsehandler = require("../responsehandler");
const create = joi.object({
    name : joi.string(),
    username : joi.string(),
    password:joi.string(),
});
const update = joi.object({
   
    name : joi.string(),
    username : joi.string(),
});

const getdelete = joi.object({
   
    name : joi.string(),
    username : joi.string(),
});
module.exports={
    Create:async(req,res, next)=>{
        try {
            console.log('validation');
            console.log(req.body);
            await create.validateAsync(req.body);
            // console.log('abc');
         next();
        } catch (error) {
            return responsehandler(res,{error:error.massage});
            
            
        }
    },
        Update :async(req,res)=>{
            try {
                await update.validateAsync(req.body);
                next();
               } catch (error) {
                return responsehandler(res,{error:error.massage})
               }
           },
    GetDelete :async(req,res)=>{
        try {
            await getdelete.validateAsync(req.query);
            next();
           } catch (error) {
            return responsehandler(res,{error:error.massage})
           }
       
},
};