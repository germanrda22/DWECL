mes = prompt('Introduzca el nombre de un mes');

switch (mes){
    case 'Enero':
        alert('31');
        break;
    case 'Febrero':
        alert('28 / 29');
        break;
    case 'Marzo':
        alert('31');
        break;
    case 'Abril':
        alert('30');
        break;
    case 'Mayo':
        alert('31');
        break;
    case 'Junio':
        alert('30');
        break;
    case 'Julio':
        alert('31');
        break;
    case 'Agosto':
        alert('31');
        break;
    case 'Septiembre':
        alert('30');
        break;
    case 'Octubre':
        alert('31');
        break;
    case 'Noviembre':
        alert('30')
        break;
    case 'Diciembre':
        alert('31');
        break;
    default:
        alert('Lo siento, eso no es un mes')
}