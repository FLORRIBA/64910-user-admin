const usersStart = [
    {
      fullname: "John Doe",
      age: 30,
      email: "admin@admin.com",
      id: "1",
      active: true,
      password: "admin",
      bornDate: new Date("1993-01-01").getTime(),
      location: "La Pampa",
      image:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280",
      role:'ADMIN_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
      role:'CLIENT_ROLE'
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
        role:'CLIENT_ROLE'
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
        role:'CLIENT_ROLE'
      },
  ];
  
  
  
  //Primera vez q se ejecuta la aplicacion (1 sola vez) -- preguntamos HAY ALGO en el localStorage?sino encontro nada ....
  if (localStorage.getItem("users") === null) {
    //GUARDA en el localStorage con un valor "users" un array vacio
    //localStorage.setItem("users", JSON.stringify([ ]))
  
    localStorage.setItem("users", JSON.stringify(usersStart)); // sino encontramos nada en el localStorage, que tome el arrayStart ...(harcodeado)
  }
  
const productStart = [
    //producto 1
    //producto2
]
if (localStorage.getItem("product") === null) {
    //GUARDA en el localStorage con un valor "users" un array vacio
    //localStorage.setItem("users", JSON.stringify([ ]))
  
    localStorage.setItem("product", JSON.stringify(productStart)); // sino encontramos nada en el localStorage, que tome el arrayStart ...(harcodeado)
  }
  