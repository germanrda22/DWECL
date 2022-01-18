// Muestra el número de anclas que tiene el documento
document.write(document.getElementsByTagName('a').length);
// Muestra el texto dentro del tag del primer ancla (innerHTML)

// Muestra el número de imégenes del documento
document.write(document.images.length);
// Muestra el id de la primera imágen
document.write(document.images[0].id);
// Muestra el número de enlaces del documento
document.write(document.anchors.length);
// Cambia el título del documento
document.title = prompt('Introduzca el nuevo título del documento');