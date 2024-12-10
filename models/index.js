const connection = require("../dbconnection");
const users = require("./Definations/user");
const admin = require("./Definations/Admin");
const attributes = require("./Definations/Attributes");
const vendor = require("./Definations/Vendor");
const variationHasattribute = require("./Definations/VariationHasAttribute");
const productVariations = require("./Definations/ProductVariations");
const products = require("./Definations/Products")

const models = {users,admin,attributes,vendor,variationHasattribute,productVariations,products};
//relations
// //vendor product 1:m
vendor.hasMany(products,{foreignkey:"vendorid",as:"productsVariation"});
vendor.hasMany(products, {foreignkey: "vendorid", as: "productVariation"});

products.belongsTo(vendor,{foreignkey:"productid",as:"products"});
//product variations 1to many
products.hasMany(productVariations,{foreignKey:"productid",as:"productVariations"});
productVariations.belongsTo(products,{foreignKey:"productid",as:"product"});
// variations many to many
productVariations.hasMany(variationHasattribute,{foreignKey:"productvariationid"});
variationHasattribute.belongsTo(productVariations,{foreignKey:"productvariationid"});

attributes.hasMany(variationHasattribute,{foreignKey:"attributeid",as:"attribute"});
variationHasattribute.belongsTo(attributes,{foreignKey:"atttributeid",as:"variationhHasattribute"})
vendor.hasMany(products, {foreignKey: "vendorid", as: "productVariations"});
products.belongsTo(vendor, {foreignKey: "vendorid", as: "productVendor"});

const db ={};
db.connection = connection;
connection.models =models;
module.exports={db , models};