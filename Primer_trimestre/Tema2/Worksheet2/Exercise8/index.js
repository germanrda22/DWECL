num = parseInt(Math.random() * 3 + 1);

switch (num){
    case 1:
        document.write('<img src="https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/gallery_image/public/los_simpson_1.png?itok=mahAR4ZT">');
        break;
    case 2:
        document.write('<img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/05/hipertextual-todo-que-sabemos-cuarta-temporada-rick-morty-2019866354.jpg?fit=1200%2C674&ssl=1">');
        break;
    case 3:
        document.write('<img src="https://i2.wp.com/www.sectorcine.com/wp-content/uploads/2019/12/mejores-pel%C3%ADculas-animadas-de-la-decada.jpg?fit=700%2C400&ssl=1">');
        break;
    default:
        document.write('Ha ocurrido un problema');
}