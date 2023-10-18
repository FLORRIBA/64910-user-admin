const usersArray = [
  {
    fullname: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    id: "1",
    active: true,
    password: "password123",
    bornDate: new Date("1993-01-01").getTime(),
    location: "New York, NY",
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
    location: "Los Angeles, CA",
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
    location: "Miami, FL",
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
    location: "Chicago, IL",
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
    location: "Houston, TX",
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
    location: "San Francisco, CA",
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
    location: "Boston, MA",
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
    location: "Dallas, TX",
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
    location: "San Diego, CA",
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
    location: "Denver, CO",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325",
  },
];
//Obtener el body de la tabla
const tableBody = document.getElementById("table-body");
const searchInput = document.querySelector("#search");//BUSCADOR

  //Filtro de usuarios
  searchInput.addEventListener("keyup", (eventito) => {
    console.log(eventito)  //1-Escuchar cuando el usuario presiona una tecla,
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
<tr class="table-body">
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
    
    </td>
</tr>`;
  });
}
pintarUsuarios();


//=== Function borrarUsuarios ==============
function borrarUsuario(indice) {
  usersArray.splice(indice, 1);//borrar una posicion 
  pintarUsuarios();
}
borrarUsuario()