function random(number) {
  return Math.floor(Math.random() * (number+1));
}

const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const par = document.querySelector('p');
const div = document.querySelector('div');
const ima = document.querySelector('img');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
h2.addEventListener('click', bgChange);
par.addEventListener('click', bgChange);
div.addEventListener('click', bgChange);
ima.addEventListener('click', bgChange);
btn.addEventListener('focus', bgChange);