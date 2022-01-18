function factorial(num) {
	if (num==0) {
		return 1
	} else{
		return num*factorial(num-1)
	}
};
document.write('<h1>Factoriales de 1 a 10</h1><table border=1px>');
for (var i = 1; i < 11; i++) {
	document.write(`<tr><td>${i}</td>
    <td>${factorial(i)}</td></tr>`);
}

document.write('</table>');