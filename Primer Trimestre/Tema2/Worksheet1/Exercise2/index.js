document.write(`La fecha de hoy es ${new Date()}` + '<br>');

var fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
document.write(`La fecha +85 días es ${fecha85}` + '<br>');

var fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);
document.write(`La fecha -187 días es ${fecha187}` + '<br>');

fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write(`La fecha +85 +2 años días es ${fecha85}` + '<br>');

fecha187.setDate(fecha187.getDate() - 1);
document.write(`La fecha 187 -1 día  es ${fecha187}` + '<br>');

var fechaResto = fecha85 - fecha187;
document.write(`La fecha85 menos la fecha187 es ${fechaResto}`);