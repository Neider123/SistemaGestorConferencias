const urlBackendeva = "http://localhost:8080/usuarios";

/**
async function loginUser(loginDTO) {
  const result = await fetch(urlBackend + "usuarios/iniciarSesion", {
    method: 'POST',
    body: JSON.stringify(loginDTO),
    headers: {
      "Content-type": "application/json"
    }
  })
  return result;
}
  */

async function loginUser1(Usuario) {
  const result = await fetch(urlBackendeva + "/iniciarSesion", {
    method: 'POST',
    body: JSON.stringify(Usuario),
    headers: {
      "Content-type": "application/json"
    }
  })
  return result;
}

function iniciarSesionChair() {

  event.preventDefault();
  // Obtener los valores de los campos de entrada
  var correo = document.getElementById('correoChair').value;
  var password = document.getElementById('passwordChair').value;
  //Creo el objeto Usuario 

  const Usuario = {
    correo,
    password
  }
  console.log(Usuario)
  //Llamar a la funcion loginUser
  loginUser1(Usuario)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.rol.id_rol)
      window.location.href = "../Paginas/InicioChair.html"
      if (data.rol.id_rol === 3) {
        localStorage.setItem("Data", JSON.stringify(data))
        window.location.href = "../Paginas/InicioChair.html";
      }else if(data.rol.id_rol === 1){
        window.location.href = "../Paginas/InicioAdministrador.html";
      }else if(data.rol.id_rol === 5){
        window.location.href = "../Paginas/InicioEvaluador.html";
      }else if(data.rol.id_rol === 2){
        window.location.href = "../Paginas/InicioEvaluador.html";
      } else {
        alert("usuario no autorizado")
      }
    })
    .catch(e => {
      console.log(e)
      alert("Contraseña o email incorrecto")
    })
}