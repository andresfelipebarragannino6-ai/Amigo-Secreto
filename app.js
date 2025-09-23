let amigos = []; // Lista de amigos

function agregarAmigo(){ // Se declara la función de agregar amigos
    //definimos la variable var
    //documento.getElementById.value = ayuda a traer el valor del id 
    var amigoIngresado = document.getElementById("amigo").value; // Se declara el ingreso de los nombres

    if(amigoIngresado === ''){  // Se declara una condicional que indica que si el usuario no ingresa ningun nombre indicara el siguiente mensaje
        alert("Por favor, inserte un nombre."); // Imprime en pantalla el siguiente mensaje
    }else{
        if(!isNaN(amigoIngresado)){ // Se declara una condicional que por medio de la función "isNaN", que permite identificar si la variable ingresada no es un numero, pero como esta negada pues solo obedece a que si es un numero cumpla lo siguiente
            alert("No se permiten números. Por favor, ingrese un nombre válido."); // Imprime en pantalla el siguiente mensaje
            return; // Detiene la ejecución para no agregar el número a la lista
        }
        if (amigos.includes(amigoIngresado)){
            alert("Ese amigo ya fue ingresado. Ingrese uno nuevo"); // Imprime en pantalla el siguiente mensaje
        } else{
            //ingresamos a la lista
            amigos.push(amigoIngresado); // Por medio de la función de "push" se agrega el nombre que haya ingresado el usuario
            mostrarAmigo(); // Se realiza un llamado de la función que va a mostrar al amigo
            limpiarInput(); // Se realiza un llamado de la función que va a limpiar el input
        }
    }

}


function mostrarAmigo(){
    var mostrarAmigo = document.getElementById("listaAmigos"); // Se crea una variable constante que selecciona el id o atributo del HTML que es en este caso "listaAmigos"
    mostrarAmigo.innerHTML = ""     //limpia la lista antes de agregar nuevos

    for (let i = 0; i< amigos.length;i++){ // Se establece un bucle que inicia desde cero hasta recorrer la longitud de la lista que se define por el numero de nombres que ingrese el usuario
        let li = document.createElement("li");   // Crea un nuevo elemento <li> vacío que luego se llena con el nombre del amigo 
        li.textContent = amigos[i];     // Se llama a la variable de vacío para que por medio de la función "textContent" pueda ser ingresado el nuevo nombre ese es vacío
        mostrarAmigo.appendChild(li);  // Se llama a la variable que selecciona el id o atributo del HTML que es "listaAmigos" y se va agregando el nombre mediante la variable de vacío que adjunta el nombre mediante la aplicación de la función "textContent" 
    }
}

function limpiarInput() { // Se crea una función que va a limpiar la pantalla
    document.querySelector('#amigo').value = '';        //tomamos el id del input y le seteamos el valor ''
}

function sortearAmigo() { // Creo una función que me sorte los amigos ingresados por el usuario
    if (amigos.length === 0) { // Valida el tamaño de la lista de amigos si es cero se cumple lo siguiente 
        alert("No hay amigos para sortear."); // Imprime el siguiente mensaje
        return;
    }

    let numeroAmigo = Math.floor(Math.random()*amigos.length); // Se crea la variable que va a sortear los nombres
    let amigoSorteado = amigos[numeroAmigo]; // Se obtiene el nombre del amigo secreto

    let mostrarAmigoSecreto = document.getElementById("resultado"); // Se obteine el amigo secreto
    mostrarAmigoSecreto.innerHTML = ""  // Se limpia la lista antes de agregar nuevos

    let liAmigo = document.createElement("li"); // Se crea un elemento para listar el resultado
    liAmigo.textContent = "Tu amigo secreto es "+ amigoSorteado; // Se imprime el resultado del amigo secreto
    mostrarAmigoSecreto.appendChild(liAmigo);   // Se agrega el resultado
    sorteoRealizado = true; // Marcar que ya se hizo el sorteo
    document.getElementById("btnSortear").disabled = true; // Deshabilitar el botón de sortear por medio de id o atributo que es "btnSortear"
}

