const usersStart = [
  {
    fullname: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    id: "1",
    active: true,
    password: "password123",
    bornDate: new Date("1993-01-01").getTime(),
    location: "La Pampa",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280",
  },
  {
    fullname: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
    id: "2",
    active: false,
    password: "password456",
    bornDate: new Date("1998-05-05").getTime(),
    location: "La Pampa",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280",
  },
  {
    fullname: "Alice Johnson",
    age: 35,
    email: "alice.johnson@example.com",
    id: "3",
    active: true,
    password: "password789",
    bornDate: new Date("1988-08-08").getTime(),
    location: "Cordoba",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325",
  },
  {
    fullname: "Michael Smith",
    age: 40,
    email: "michael.smith@example.com",
    id: "4",
    active: false,
    password: "password101",
    bornDate: new Date("1983-04-10").getTime(),
    location: "Buenos Aires",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280",
  },
  {
    fullname: "Emily Johnson",
    age: 28,
    email: "emily.johnson@example.com",
    id: "5",
    active: true,
    password: "password202",
    bornDate: new Date("1995-02-15").getTime(),
    location: "La Pampa",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325",
  },
  {
    fullname: "Daniel Lee",
    age: 34,
    email: "daniel.lee@example.com",
    id: "6",
    active: false,
    password: "password303",
    bornDate: new Date("1989-07-07").getTime(),
    location: "San Luis",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325",
  },
  {
    fullname: "Samantha Davis",
    age: 22,
    email: "samantha.davis@example.com",
    id: "7",
    active: true,
    password: "password404",
    bornDate: new Date("2001-11-11").getTime(),
    location: "Rosario",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325",
  },
  {
    fullname: "James Moore",
    age: 45,
    email: "james.moore@example.com",
    id: "8",
    active: false,
    password: "password505",
    bornDate: new Date("1978-12-19").getTime(),
    location: "La Pampa",
    image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png",
  },
  {
    fullname: "Isabella Taylor",
    age: 29,
    email: "isabella.taylor@example.com",
    id: "9",
    active: true,
    password: "password606",
    bornDate: new Date("1994-06-24").getTime(),
    location: "San Luis",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325",
  },
  {
    fullname: "Ethan Johnson",
    age: 31,
    email: "ethan.johnson@example.com",
    id: "10",
    active: false,
    password: "password707",
    bornDate: new Date("1992-03-03").getTime(),
    location: "Rosario",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325",
  },
];

//const userrsArray=JSON.parse (localStorage.getItem("users"))

//Primera vez q se ejecuta la aplicacion (1 sola vez) -- preguntamos HAY ALGO en el localStorage?sino encontro nada ....
if (localStorage.getItem("users") === null) {
  //GUARDA en el localStorage con un valor "users" un array vacio
  //localStorage.setItem("users", JSON.stringify([ ]))

  localStorage.setItem("users", JSON.stringify(usersStart)); // sino encontramos nada en el localStorage, que tome el arrayStart ...(harcodeado)
}

const usersArray = JSON.parse(localStorage.getItem("users"));

/* ===== Ubico el DOM ======== */
//Obtener el body de la tabla
const tableBody = document.getElementById("table-body");
const searchInput = document.querySelector("#search"); //BUSCADOR
const userForm = document.querySelector("form#user-form"); //Buscar el form con el id=user-form
//Buscamos el boton Agregar Usuario
const submitBtn = userForm.querySelector("button[type=submit].btn-form");

//Evento submit en el formulario, se dispara cuando complete correctamente el formulario, recibo el evento evt dentro de la funcion
userForm.addEventListener("submit", (evt) => {
  evt.preventDefault(); //tener registro dentro de la funcion

  console.dir(evt.target.elements.location.value); // .dir me muestra las PROPIEDADES disponibles
  //const el(element)donde tengo los eventos del formulario
  const el = evt.target.elements; //evt PARAMETRO (OBJETO que tiene propiedades, me intersa la PROPIEDAD .target que es donde se disparo el evento y ahi la PROPIEDAD .elements)

  //Cortar la ejecucion de la funcion callback del evento submit
  //!paswords distintas
  if (el.password.value !== el.password2.value) {
    alert("las contraseñas no coinciden");
    return; //para cortar la funcion
  }
  //!Email ya existe
  const emailExist = usersArray.find((user) => {
    //encontrar un user, find=> retorna true, corta y guarda el usuario en la const
    if (user.email === el.email.value) {
      //el usuaior que estoy recorriendo tiene un usuaior = al valor emial que coloco la persona
      return true;
    }
  }); //si el value de un email ingresado existe - emailExist (ingreso un correo que existe), pero  el id de ese correo nuevo no coincide con el id del mailExist ... me tira el alerta
  if (emailExist && el.id.value !== emailExist.id) {
    //encontre a alguien con ese mismo correo
    Swal.fire({
      title: "El correo ya existe",
      icon: "error",
    });
    return;
  }

  /*OPERADOR TERNARIO -if, else en unamisma linea*/
  //const id = condicion?    condicion True : condicion False
  const id = el.id.value ? el.id.value : crypto.randomUUID(); // estoy diciendo lo mismo que lo de abajo
  // =
  // let id;
  // if(el.id.value){   //si el elemento id en su value es True => estoY EDITAMDO UN USUARIO
  //   id=el.id.value   // id = al avalor que tenga ese input
  // }else{
  //   id=crypto.randomUUID() //si no existe el ID ingresado en el input "hyden" => es un USUARIO NUEVOlo generamos
  // }

  //OBJETO usuarioNuevo, va a tner una prop, valor es el de "name"
  const user = {
    fullname: el.fullname.value, //me interesa la propiedad fullname (name input)su valor
    age: el.age.valueAsNumber, //string a number
    email: el.email.value,
    password: el.password.value,
    active: el.active.checked, //propiedad cheked que me da true or false, si la propiedad (Activo esta checkeado o no)
    bornDate: new Date(el.fechaNac.value), //necesito que me convierta la fecha en Timestamp
    location: el.location.value,
    id: id, //new Date().getTime() => id basandome en el tiempo, /FUNCION de js(libreria/API) crypto.randomUUID , GENERA UN id (string unica para c/usuario) RANDOM
    image: el.image.value,
  };

  //Tenemos 2 posibles acciones a realizar
  //1) Agregar (CREATE) un usuario nuevo
  //2) Al estar editando (UPDATE) deberia reemplazar el usuario a editar con su info actualizada)
  if (el.id.value) {
    //========= EDITAR USUARIO=======================
    const indice = usersArray.findIndex((usuario) => {
      //busco la posicion donde esta ese usuario, finIndex me devuelve la posicion de ese usuario
      if (usuario.id === el.id.value) {
        return true;
      }
    });
    //2)una vez que tengo el usuario=>reemplazo el usuario con los datos nuevos del formulario
    usersArray[indice] = user;
    Swal.fire("Usuario Editado");
    title: "Usuario Editado";
    text: "los datos del usuario fueron actualizados";
    icon: "succes";
    timer: 1000;
  } else {
    //1)Agregando un usuario nuevo
    usersArray.push(user); //agregar al listado el nuevo usuario
    Swal.fire("Usuario Agregado");
    title: "Usuario Agregado";
    text: "los datos del usuario fueron agregadoss";
    icon: "succes";
    timer: 1000;
  }
  pintarUsuarios(usersArray); //para verlo reflejado en nuestra lista, mi array tiene un elemento nuevo (pinta itera desde el elemnto 0 hasta el ultimo que se agrega)
  // - Actualizo usersArray
  actulizarLocalStorage();

  resetearFormulario(); //llamo a la Funcion
});

/*========= Funcion Resetear Formulario ============= */
function resetearFormulario() {
  userForm.reset(); //reseteo el form
  userForm.elements.password.disabled = false; //activo si estaban desactivados  los input pasword
  userForm.elements.password2.disabled = false;
  submitBtn.classList.remove("btn-edit"); //remuevo la class editar
  submitBtn.innerText = "Agregar usuario"; //vuelvo el texto del btn a su valor por defecto
  userForm.elements.nombreCompleto.focus(); //el cursor vuelve al input nombre Completo
}

//========Filtro de usuarios===============
searchInput.addEventListener("keyup", (eventito) => {
  // console.log(eventito)  //1-Escuchar cuando el usuario presiona una tecla,
  //2-obtener valor del input,
  const inputValue = eventito.target.value.toLowerCase(); //valor(letra ecrita)lo tengo en el eventito.target.value ---leer del evento keyup su valor
  //3-  buscar en todos los usuarios aquellos que tengan ese texto,
  const usuariosFiltrados = usersArray.filter((usuario /*FUNCION FLECHA */) =>
    usuario.fullname.toLocaleLowerCase().includes(inputValue)
  );
  /* IF */
  // const usuariosFiltrados = usersArray.filter((usuario) => {
  // const nombre = usuario.fullname.toLocaleLowerCase();
  //4- pintar (guardar en el nuevo array) solo los usuarios que hayan coincidido*/
  //  if (nombre.includes(inputValue)) {
  //     return true;
  //    }

  //   return false;
  //  });
  // console.log(usuariosFiltrados);
});

//=== Funcion pintarUsuarios ======================

function pintarUsuarios(arrayPintar) {
  tableBody.innerHTML = ""; //reseteamos todo el html del body de la tabla para poder crear las row correspomdientes ( y for empieza a agregar filas)
  //Iterar el array y agregar un tr por c/alumno que tengamos
  arrayPintar.forEach((user, index) => {
    //INSERTAR TABLA DESDE JAVA SCRIPT
  tableBody.innerHTML += ` 
<tr class="table-row">
    <td class="user-image">
        <img src="${user.image}" alt="${user.fullname} avatar">
    </td>
    <td class="user-name">${user.fullname}</td>
    <td class="user-email">${user.email}</td>
    <td class="user-location">${user.location}</td>
    <td class="user-age">>${user.age}</td>
    <td class="user-date">>${formatDate(user.bornDate)}</td>
    <td>
    <button class=" action-btn btn-danger" tittle="Borrar usuario"
    onclick="borrarUsuario('${user.id}')">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    <button class="action-btn"
            tittle="Editar usuario"
            onclick="editarUsuario('${user.id}' , '${user.fullname})"> 
            <i class="fa-solid fa-pen-to-square"></i>
            </button>

    </td>
</tr>`;
  });
}

//('${user.id}')para tomar el user.id como string cuando se llame a la funcion editar

//=== Funcion borrarUsuarios ==============

//buscamos por ID no por indice
function borrarUsuario(ID, nombre) {
  const confirmDelete = confirm(
    `Realmente desea borrar este usuario ${nombre}`
  );

  if (confirmDelete) {
    const indice = usersArray.findIndex((user) => user.id === ID);
    usersArray.splice(indice, 1);
    pintarUsuarios(usersArray);
    // -Actualizo usersArray
    actulizarLocalStorage();
  }
} 


//=== Funcion editarUsuario================

// 1)INDICAR que el usuario no fue encontrado
function editarUsuario(idBuscar) {
  //buscar-find((parametro)=> {funcion }) el usuario con ese ID y obtenerlo, segun el ID que me enviaron = al del usuario que estoy iterando
  const userEdit = usersArray.find((usuario) => {
    //find(el-elemento-que-encuantra,indice-del elemento-que-esta-iterando )
    if (usuario.id === idBuscar) {
      //si el usuario que estoy iterando en su prop.id es === al id que me enviaron en la funcion, solo en ese caso voy a hacer un true.
      return true;
    }
  });
  //if(!userEdit)otra forma de escribirlo, si el usuario !NO ES TRUE
  if (userEdit === undefined) {
    Swal.fire("Error al editar", "No se pudo editar el usuario", "Error"); //Libreria Swal.fire-TITULO, MENSAJE, ICONO (predefinido)
    return; //para cortar la ejecucion de la function editarUsuario
  }

  // 2)RELLENAR el formulario con los datos del usuario a editar  (excepto contraseña)
  //const (el)elemento, userForm. tiene los imputs en la prop.elements
  const el = userForm.elements; // seteo el input "hyden" name=id
  el.id.value = userEdit.id; //el valor de ese input(id) esta el la const userEdit.id
  el.age.value = userEdit.age; //el valor de ese input(age) esta el la const userEdit.age
  el.email.value = userEdit.email;
  el.fullname.value = userEdit.fullname;
  el.age.value = userEdit.age;
  el.active.checked = userEdit.active; //la propiedad del campo Activo es checked
  el.location.value = userEdit.location; //la propiedad location tiene que coincidir con el value= "Buenos Aires"
  el.image.value = userEdit.image;
  el.password.value = userEdit.password;

  //3)TRABAJAR en deshaibilitar los input de contraseña
  //1 forma-el.password.type='hiden'//le seteo el valor pero lo oculto
  //2 forma:
  el.password.disabled = true;
  el.password2.value = userEdit.password;
  el.password2.disabled = true;
  el.fechaNac.value = formatInputDate(userEdit.bornDate);
}

//4)Cambiar el nombre del boton a "Editar usuario"
/*userForm.querySelector =>busque un button dentro del userForm cuyo type=submit(selector dentro css) algo dentro del userForm
const submitBtn = userForm.querySelector('button[type=submit].btn-form') 
Cuando la persona toque el boton Editar cambiar el nombre del boton a "Editar  usuario"*/
submitBtn.classList.add("btn-edit"); //add(className): Agrega una clase al elemento. Si la clase ya existe, no se agregará nuevamente.
submitBtn.innerText = "Editar usuario";

/*============ Funcion actualizarLocalStorage========= */
//seteamos sobre la misma key donde teniamos los usuarios el nuevo valor del usersArray (agregar, editar o borrar elemento del array)
function actulizarLocalStorage() {
  localStorage.setItem("users", Json.stringify(usersArray));
}

//Metodos (otro tema)
const objeto = {
  nombre: "pepe", //propiedades
  apellido: "suarez",
  saludar() {
    //funcion dentro del objero
    // console.log("Hola soy pepe");
  },
};
objeto.saludar();
