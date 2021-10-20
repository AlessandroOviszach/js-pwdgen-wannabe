// Password generator

// name
const nome = prompt("Name");
console.log(nome);
document.getElementById('nome').innerHTML = nome;

// surname
const surname = prompt('Surname');
console.log(surname);
document.getElementById('surname').innerHTML = surname;

// color
const color = prompt('Favourite color');
console.log(color);
document.getElementById('color').innerHTML = color;

// password generate
document.getElementById('password').innerHTML = `${nome}${surname}${color}`;