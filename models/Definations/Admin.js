// const{DataTypes,Model, UUID}=require("sequelize")
// const connection =require("../../dbconnection")
// const{v4:uuid}=require("uuid")
// class admin extends Model{ }

// admin.init({
//     adminid :{
//         primaryKey: true,
//         type: DataTypes.STRING(60),
//     },
   
// },
// {
//     name:"admin",
//     timestamps:true,
//     paranoid:true,
//     sequelize:connection,

// });
// admin.beforeCreate(async(admin)=>{
//     admin.adminid =uuid();
// })
// module.exports =admin;