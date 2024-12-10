const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbconnection");
const products=require("./Products");
class productVariations extends Model{}

productVariations.init(
    {
        productVariationId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       variationName: {
      
         type: DataTypes.STRING(),
         allowNull:false,
      },
      discription: {
      
         type: DataTypes.STRING(),
         allowNull:false,
         },
         quantity: {
      
            type: DataTypes.STRING(),
            allowNull:false,
            },
            price: {
      
                type: DataTypes.STRING(),
                allowNull:false,
                },
                  productId:{
                  type: DataTypes.STRING(),
                  allowNull:false,
                  references:{
                     model:products,
                     key:"productId"
                  }

                }
               
       
    },
    {
       name: "productVariations",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 productVariations.beforeCreate(async (productVariation)=>{
    productVariation.productVariationId=uuid();
 });

module.exports=productVariations;