const express = require("express");
const mongoose = require("mongoose");
// "const express para asignación framework express"
//"require() para importar dependencias por nombre"
const user = require("./User.Controller")
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://Mauricio:m9BsCw9xu402bkAO@testcluster.38yokte.mongodb.net/MiApp?retryWrites=true&w=majority');



app.get("/users",user.list);
app.post("/users", user.create);
app.get("/users/:id",user.get);
app.put("/users/:id",user.update);
app.patch("/users/:id",user.update);
app.delete("/users/:id",user.destroy);


app.use(express.static("APP")) //Servir archivos que están en la misma carpeta

//Raiz
app.get("/",(req,res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`);
})

app.get("*", (req,res)=>
{
    res.status(404).send("Esta página no existe");
});

//Al final de todas las rutas que no se encuentren
app.post("*", (req,res)=>
{
    res.status(404).send("Esta página no existe");
});

app.listen(port, () => 
{
    console.log("Arrancando la aplicación")
})