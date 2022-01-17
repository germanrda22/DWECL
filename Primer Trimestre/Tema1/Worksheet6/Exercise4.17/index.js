for (num = 1; num <= 10; num++){
    document.write('<b>Tabla del ' + num + ':</b><br>');
    for (mult = 0; mult <=10; mult++){
        document.write(num + 'x' + mult + '=' + num * mult + '<br>');
    }
    document.write('<br>');
}