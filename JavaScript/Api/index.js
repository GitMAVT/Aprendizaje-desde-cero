const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://Mauricio:m9BsCw9xu402bkAO@testcluster.38yokte.mongodb.net/MiApp?retryWrites=true&w=majority');

const User = mongoose.model("User", {
    username    : String,
    edad        : Number,
    rut         : String,

});

const crear = async () =>
{
    const user = new User({ username: "Chanchito Triste", edad: 25,rut:"19200350-k" })
    const savedUser = await user.save();
    console.log(savedUser);
}

//crear();

const buscarTodo = async () =>
{
    const users = await User.find(); //devuelve arreglo de todos los usuarios.
    console.log(users);
}

// buscarTodo();

const buscar = async () =>
{
    const user = await User.find({ username: "Chanchito Feliz"}); //Retorna un arreglo con todos los coincidentes
    console.log(user);
}

// buscar();

const buscarUno = async () =>
{
    const user = await User.findOne({ username: "Chanchito Feliz"}); //Devuelve un objeto coincidente
    console.log(user);
}

// buscarUno();

const actualizar = async () =>
{
    const user = await User.findOne({ username : "Chanchito Feliz"})
    console.log(user);
    user.edad = 30;
    await user.save();
}

// actualizar();

const eliminar = async () =>
{
    const user = await User.findOne( { username : "Chanchito Triste" } );
    console.log(user);
    if (user != null)
    {
        await user.deleteOne();    //Para remover siempre cuando exista
    }
}

// eliminar();