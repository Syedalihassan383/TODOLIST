const{DataTypes,Model, UUID}=require("sequelize")
const connection =require("../../dbconnection")
const{v4:uuid}=require("uuid")
class vendor extends Model{ }

vendor.init({
    vendorid :{
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
   
},
{
    name:"vendor",
    timestamps:true,
    paranoid:true,
    sequelize:connection,

});
vendor.beforeCreate(async(vendor)=>{
    vendor.vendorid =uuid();
})
module.exports =vendor;