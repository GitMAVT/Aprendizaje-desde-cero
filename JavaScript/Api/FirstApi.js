const express = require("express");
// "const express para asignación framework express"
//"require() para importar dependencias por nombre"
const user = require("./User.Controller")
const app = express();
const port = 3000;

app.get("/",user.list);
app.post("/", user.create);
app.get("/:id",user.get);
app.put("/:id",user.update);
app.patch("/:id",user.update);
app.delete("/:id",user.destroy);
//Al final de todas las rutas que no se encuentren
app.get("*", (req,res)=>
{
    res.status(404).send("Esta página no existe");
});
app.post("*", (req,res)=>
{
    res.status(404).send("Esta página no existe");
});

app.listen(port, () => 
{
    console.log("Arrancando la aplicación")
})