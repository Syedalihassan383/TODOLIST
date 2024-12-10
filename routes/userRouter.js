// const routes =require("express").Router();
// const usercontroller =require ("../controllers/usercontroler")
// routes.get("/get-all-user",usercontroller.getAlluser);
// routes.get("/create-user",usercontroller.createuser)
// routes.get("/getuser",(req, res)=>{
//    return res.send("get users");

// const { Update, Create, GetDelete } = require("../validation/uservalidation");
// const routes = require("./adminrouter")


// });
// routes.get(("/create-user"),(req , res) =>{
//     return res.send("create user api");
// });
// module.exports = routes ;
// const routes =require("express").Router();
// const{
//     createuser,
//     getalluser,
//     updateuser,
// }=require("../controllers/usercontroler");
// routes.get ("/get-all-users",getalluser);
// routes.post("/createuser",createuser);
// routes.get("/update-user",updateuser);
// module.exports = routes;
const routes =require("express").Router();
const{Update,Create,GetDelete} =require("../validation/uservalidation");
const{create,getAll,deleteUser,update}=require("../controllers/usercontroler");
routes.post("/create",Create,create);
routes.patch("/update",Update,update);
routes.get("/get",GetDelete,getAll);
routes.delete("/delete",GetDelete,deleteUser)

module.exports=routes;