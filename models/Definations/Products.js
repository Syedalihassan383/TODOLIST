const{DataTypes,Model}=require("sequelize")
const connection =require("../../dbconnection")

const{v4:uuid}=require("uuid");

class products extends Model{ }

products.init({
    productid :{
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    productName:{
        type:DataTypes.STRING(34),
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING(34),
        allowNull:false,
    },
   vendorId:{
    type:DataTypes.STRING(60),
    allowNull:false,
}

},
{
    name:"product",
    timestamps:true,
    paranoid:true,
    sequelize:connection,

});
products.beforeCreate(async(product)=>{
    product.productid =uuid();
});
module.exports =products;