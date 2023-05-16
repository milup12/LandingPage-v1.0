function capturarDatos(){
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  console.log('nombre',nombre);
  console.log('correo', correo);
  console.log('telefono',telefono);
}

capturarDatos()