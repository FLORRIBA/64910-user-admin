/*
Cargar usuario de la DB (loscalStorage)
Tomar el formulario, los datos cargados.
Ver si existe un email como el q el usuario ingreso
Corroborar que la contraseña ingresada en el input se iguala con los datos guardados
    👎cuando no existe email
    👎existe pero la contraseña no coincide
        *mensaje ERROR
    👍hacer login
        *guardar en el localStorage un currentUser
        *redireccionar al HOME

*/

const users= JSON.parse( localStorage.getItem("users")) || []; //sino encontras nada por lo menos generame un array vacio---users=array vacio
console.log(users)
const loginForm =document.getElementById('login-form')

loginForm.addEventListener('submit', (evt)=>{
    evt.preventDefault() //prevenir el comportamiento ñpor defecto sino se recarga la pg!

    const email = evt.target.elements.email.value; //     = const email = loginForm.elements.email
    const password=evt.target.elements.password.value; // = const password= loginForm.elements.password

    const user=users.find((usr) =>{ //find recorre 1 x 1 los usuarios
        console.log(usr.email)
        
        //el email ingresado coincide con el usuario que estoy recorriendo ?
       if(usr.email.toLowerCase()===email.toLowerCase()) {
         return true
        }

        return false 

        // return usr.email===email
    })
    //--cortamos el submit ya que no existe el correo y el password es distinto.
    if(!user || user.password !== password){
        Swal.fire({
            title: "Login Incorrecto",
            text: "datos ingresados incorrectos",
            icon: "error",
            timer: 1000
      
        })
        return;
    }

    // delete user.password =>no se guarda la prop.password
    delete user.password;

    localStorage.setItem("currentUser", JSON.stringify(user))

    Swal.fire({
        title: "Login Correcto",
        text: "sera redireccionado en un momento",
        icon: "succes",
        timer: 1000
  
    })
    setTimeout(function(){ //redireccionamos al index
        window.location.href = '/index.html'
    },1500)




} )