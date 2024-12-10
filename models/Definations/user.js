const{DataTypes,Model}=require("sequelize")
const connection =require("../../dbconnection")

class users extends Model{ }

users.init({
    userid :{
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    name:{
        type:DataTypes.STRING(34),
        allowNull:false,
    },
    username:{
        type:DataTypes.STRING(34),
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(1000),
        allowNull:false,
    }

},
{
    name:"user",
    timestamps:true,
    paranoid:true,
    sequelize:connection,

});
module.exports =users;