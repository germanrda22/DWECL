do{
    cateto1 = parseFloat(prompt('Introduzca la medida del cateto'));
    cateto2 = parseFloat(prompt('Introduzca la medida del otro cateto'));
    hipotenusa = Math.sqrt((cateto1**2) + (cateto2**2));
    document.write(hipotenusa);
    salir = prompt('¿Quieres continuar? (Y / N)')
} while (salir == 'Y')