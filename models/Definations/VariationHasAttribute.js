const {DataTypes,Model}=require("sequelize");

const connection=require("../../dbconnection");
const productVariation=require("./ProductVariations");
const attribute=require("./Attributes");
class VariationHasattribute extends Model{}

VariationHasattribute .init(
    {
        variationHasattributeId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       productVariationId:{
         type:DataTypes.STRING(),
         references:{
            model:productVariation,
            key:"productVariationId"
         }
       },
       attributeId:{
         type:DataTypes.STRING(),
         references:{
            model:attribute,
            key:"attributeId",
         }
       }
      
       
    },
    {
       name: "variationHasattribute",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 VariationHasattribute.beforeCreate(async (variationHasattribute)=>{
    variationHasattribute.variationHasattributeId=uuid();
 });

module.exports=VariationHasattribute ;