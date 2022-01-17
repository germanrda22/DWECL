/*
Over an array with names, find all entries whose firstname starts with 'J', 
create projection combined of only the initials of the name and then sort alphabetically
*/
nombres = ['Juan', 'José', 'Paco', 'David', 'Javi', 'Aarón'];
llevaJ = [];

nombres.forEach(element => {
    if (element[0] == 'J') {
        llevaJ.push(element);
    }
});
console.log(llevaJ);

//Initials

ini = [];

nombres.forEach(element => {
    ini.push(element[0]);
});
console.log(ini);