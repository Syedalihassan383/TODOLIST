const routes =require("express").Router();
const {logout,login}= require("../controllers/authcontroller")

routes.get("/login",login);
routes.get("/login",login);
module.exports= routes;