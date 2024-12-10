const { response } = require("express");
const {models} = require("./index");
const { where } = require("sequelize");
// const { deleteUser } = require("../controllers/usercontroler");
module.exports = {
    createuser:async (body)=>{
        try {
            
            const user =await models.users.create({...body});
            return{
                response:user,
            };
        }
            catch (error) {    return{
            error:error .errors[0].message,
            } ;

        };

    },
    getAllusers:async (body)=>{
        try {
            
            const user =await models.users.findAll({paranoid:false});
            return{
                response:user,
            }
        }
        catch (error) {    return{
            error:error .errors[0].message,
        } 
        };

    },
    updateuser:async (username, ...body)=>{
        try {
            
            const user =await models.users.update({...body}, {where:{
               username:username,
            }
            },{...body});
            return{
                response:user,
            };
        }
            catch (error) {    return{
            error:error .errors[0].message,
            } ;
        };

    },
    deleteuser: async (username)=>{
        try {
            
            const user = await models.users.destroy({where:{
               username: username,
            }
            });
            return{
                response:user,
            };
    }
        catch (error) {    return{
        error:error .errors[0].message,
        } ;
        };

    },
}