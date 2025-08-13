// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo()
{
    var amigo = document.getElementById("amigo").value;
    if(amigo != "")
    {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        recorrerArray();
    } else {
        return alert("El campo no puede estar vacío. Porfavor ingrese un nombre o apodo");
    }
}

function recorrerArray()
{
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo()
{
    if(amigos != [])
    {
        var amigoSorteado = Math.floor(Math.random()*amigos.length);
        var sorteado = document.getElementById("resultado");
        sorteado.innerHTML = amigos[amigoSorteado];
    } else {
        alert("Debes ingresar personas a la lista!!!")
    }
}