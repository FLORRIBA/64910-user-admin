//window (promp-alert) localStorage - objeto que maneja todo lo del navegador

//guardar datos -  uso una key y el value
const user= {
    nombre: 'jose',
    apellido: 'perez',
    edad:'34',
}
//1)OBTENER datos del local Storage -GUARDA DATOS EN FORMA DE STRING (numeros, object, arrays)
localStorage.setItem("usuario" , JSON.stringify(user)) // nombre (Key),valor del nombre(Value de esa Key)
// JSON.stringify - Convierte un objeto JavaScript en una cadena 
const resultado=JSON.parse(localStorage.getItem ("usuario"))

const user2=[1,2,3,4]
localStorage.setItem("usuario2" , JSON.stringify(user2))
//tomarlo y convertirlo a un objeto JS
//JSON.parse construye el valor u objeto de JavaScript descrito por la cadena.
const resultado2=JSON.parse(localStorage.getItem ("usuario2"))

localStorage.setItem("email", "Juan@valdez.com")
//2)OBTENER datos del local Storage -GUARDA DATOS EN FORMA DE STRING
localStorage.getItem("usuario") //obtener el nombre de la Key

//3)BORRAR un dato guardado
localStorage.removeItem("usuario")

//4)BORRAR todo el localStorage
localStorage.clear()