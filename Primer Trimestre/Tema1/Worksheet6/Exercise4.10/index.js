let cab = 'Cabecera h';

for (let i = 1; i < 7; i++){
    document.write('<h'+ i + '>'+ cab + i +'</h' + i + '>')
}

for (let i = 1; i < 7; i++){
    document.write(`<h${i}>${cab}${i}</h${i}>`)
}