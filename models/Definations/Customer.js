const{DataTypes,Model, UUID}=require("sequelize")
const connection =require("../../dbconnection")
const{v4:uuid}=require("uuid")
class customer extends Model{ }

customer.init({
    customerid :{
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
   
},
{
    name:"customer",
    timestamps:true,
    paranoid:true,
    sequelize:connection,

});
customer.beforeCreate(async(customer)=>{
    customer.customerid =uuid();
})
module.exports =customer;