// Función de ventana de alerta
function mensaje() {

  swal({
    title: 'Título',
    text: 'Mensaje de texto',
    html: '<p>Mensaje de texto con <strong>formato</strong>.</p>',
    type: 'alert',
    timer: 3000,
  });

}
