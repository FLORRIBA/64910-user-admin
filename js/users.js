const usersArray = [
  {
    fullname: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    id: "1",
    active: true,
    password: "password123",
    bornDate: new Date("1993-01-01").getTime(),
    location: "Buenos Aires",
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
    location: "Rosario",
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
//Obtener el body de la tabla
const tableBody = document.getElementById("table-body");
const searchInput = document.querySelector("#search");//BUSCADOR
const userForm=document.querySelector("form#user-form") //Buscar el form con el id=user-form
//Buscamos el boton Agregar Usuario
const submitBtn = userForm.querySelector('button[type=submit].btn-form') 

//Evento submit en el formulario, se dispara cuando complete correctamente el formulario, recibo el evento evt dentro de la funcion
userForm.addEventListener("submit",(evt)=>{ 

evt.preventDefault() //tener registro dentro de la funcion

console.dir(evt.target.elements.location.value)// .dir me muestra las PROPIEDADES disponibles
//const el(element)donde tengo los eventos del formulario
const el =evt.target.elements; //evt PARAMETRO (OBJETO que tiene propiedades, me intersa la PROPIEDAD .target que es donde se disparo el evento y ahi la PROPIEDAD .elements)

//Cortar la ejecucion de la funcion callback del evento submit
//!paswords distintas
if(el.password.value !== el.password2.value) {
alert('las contraseñas no coinciden')
return; //para cortar la funcion 

}
//!Email ya existe
const userExist = usersArray.find((user) => { //encontrar un user, find=> retorna true, corta y guarda el usuario en la const
  if(user.email === el.email.value){//el usuaior que estoy recorriendo tiene un usuaior = al valor emial que coloco la persona 
  return true
}
})  //si no encuentro a nadie con ese correo, va a ser un OBJETO que se guarde en la const userExist
  if(userExist){ //encontre a alguien con ese mismo correo
    alert('el correo ya existe')
    return
  }
/*OPERADOR TERNARIO */
// const id = condicion?condicionTtrue : condicionFalse
const id = el.id.value ? el.id.value: crypto.randomUUID()

  // let id;
  // if(el.id.value){
  //   id=el.id.value
  // }else{
  //   id=crypto.randomUUID()
  // }

//OBJETO usuarioNuevo, va a tner una prop, valor es el de "name"
const user = {
  fullname: el.fullname.value, //me interesa la propiedad fullname (name input)su valor
  age: el.age.valueAsNumber,//string a number
  email: el.email.value,
  password: el.password.value,
  active: el.active.checked, //propiedad cheked que me da true or false, si la propiedad (Activo esta checkeado o no)
  bornDate:new Date(el.fechaNac.value),//necesito que me convierta la fecha en Timestamp
  location: el.location.value,
  id: id, //new Date().getTime() => id basandome en el tiempo, /FUNCION de js(libreria/API) crypto.randomUUID , GENERA UN id (string unica para c/usuario) RANDOM
  image: el.image.value

 
}
//Tenemos 2 podibles acciones a realizar
//1) Agregar un usuario nuevo
//2)Al estar editando deberia reemplazar el usuario a editar con su info actualizada)
if(el.id.value){
//Editando              me busca la posicion del usuario
const indice=usersArray.findIndex(usuario=>{
if(usuario.id === el.id.value){
  return true
}
})
//reemplazo el usuario con los datos nuevos del form
usersArray[indice]=user
Swal.fire('Usuario Editado')

Swal.fire{
  title:'Usuario Editado'
  text: 'los datos del usuario fueron actualizados'
  icon:'succes'
  timer:1000
}
//al modificar el array necesito refrescar la vista -pintamos para ver los cambios

}else{
//Agregando un usuario nuevo

usersArray.push(user)//agregar al listado el nuevo usuario
Swal.fire('Usuario Agregado')
title:'Usuario Agregado'
text: 'los datos del usuario fueron agregadoss'
icon:'succes'
timer:1000
}
pintarUsuarios(usersArray)//para verlo reflejado en nuestra lista, mi array tiene un elemento nuevo (pinta ietra desde el elemnto0 hasta el ultimo que se agrega)

} )
function resetearFormulario(){
  userForm.reset() //reseteo el form
userForm.elements.password.disabled=false;//activo si estaban desactivados  los input pasword
userForm.elements.password2.disabled=false;
submitBtn.classList.remove('btn-edit')//remuevo la class editar
submitBtn.innerText='Agregar usuario'//vuelvo el texto del btn a su valor por defecto
userForm.elements.nombreCompleto.focus()//el cursor vuelve a nombre 
}



//Filtro de usuarios
  searchInput.addEventListener("keyup", (eventito) => {
    // console.log(eventito)  //1-Escuchar cuando el usuario presiona una tecla,
  //2-obtener valor del input, 
  const inputValue = eventito.target.value.toLowerCase();//valor(letra ecrita)lo tengo en el eventito.target.value ---leer del evento keyup su valor
  //3-  buscar en todos los usuarios aquellos que tengan ese texto, 
  const usuariosFiltrados=usersArray.filter((usuario)=>usuario.fullname.toLocaleLowerCase().includes(inputValue)) /*FUNCION FLECHA */
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


//=== Function pintarUsuarios ======================
function pintarUsuarios() {

  tableBody.innerHTML = "";//reseteamos todo el html del body de la tabla para poder crear las row correspomdientes ( y for empieza a agregar filas) 
  //Iterar el array y agregar un tr por c/alumno que tengamos
  usersArray.forEach((user, indiceActual) => {

  tableBody.innerHTML += `
<tr class="table-row">
    <td class="user-image">
        <img src="${user.image}" alt="${user.fullname} avatar">
    </td>
    <td class="user-name">${user.fullname}</td>
    <td class="user-emial">${user.email}</td>
    <td class="user-location">${user.location}</td>
    <td class="user-age">>${user.age}</td>
    <td class="user-date">>${formatDate(user.bornDate)}</td>
    <td>
    <button class=" action-btn btn-danger" tittle="Borrar usuario"
    onclick="borrarUsuario(${indiceActual})">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    <button class="action-btn"
            tittle="Editar usuario"
            onclick="editarUsuario('${user.id}')"> 
            <i class="fa-solid fa-pen-to-square"></i>
            </button>

    </td>
</tr>`;
  });
}
pintarUsuarios();

//('${user.id}')para tomar el user.id como string cuando se llame a la funcion editar

//=== Function borrarUsuarios ==============
function borrarUsuario(indice) {
  usersArray.splice(indice, 1);//borrar una posicion 
  pintarUsuarios();
}
borrarUsuario()

//=== Function editarUsuario
function editarUsuario(id){
//buscar el usuario con ese ID y obtenerlo, segun el ID que me enviaron = al del usuario que estoy iterando
const userEdit=usersArray.find((usuario)=>{
  if(usuario.id===id){
  return true;
}

})
//if(!userEdit){
if(userEdit === undefined){
 Swal.fire('Error al editar', 'No se pudo editar el usuario', 'Error')
  return //para cortar la ejecucion de codigo
}
// console.log(userEdit)
const el = userForm.elements;

el.id.value=userEdit.id;
el.age.value = userEdit.age
el.fullname.value = userEdit.fullname
el.email.value = userEdit.email
el.age.value = userEdit.age
el.active.checked=userEdit.active
el.location.value=userEdit.location 
el.image.value=userEdit.image

el.password.value=userEdit.password;
// el.password.type='hiden'//le seteo el valor pero lo oculto
el.password.disabled=true;
el.password2.value=userEdit.password;
el.password2.disabled=true;
el.fechaNac.value=formatInputDate(userEdit.bornDate)
}

//que el formulario se rellene con los datos de esa persona (excepto contraseña)



//trabajar en deshaibilitar los input de contraseña

function formatInputDate(fechaInput){
  const fecha=new Date(fechaInput);
  const year=fecha.getFullYear();
  let month=fecha.getMonth()+1;
  if (month<10){
    month='0'+month
  }
  let day=fecha.getDate();
  if (day<10){
   day='0'+day
  }
  return `${year}-${month}-${day}`

}


//cambiar el nombre del boton a  usuario
submitBtn.classList.add('btn-edit');
submitBtn.innerText='Editar usuario'




