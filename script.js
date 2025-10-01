let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

console.log("Terceiro nome:", nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Gabriel");

nomes.pop();
console.log("Array atualizado:", nomes);

let numeros = [2, 4, 6, 8];
let numerosDobro = numeros.map(num => num * 2);
console.log("Array dobrado:", numerosDobro);

let numeros2 = [1, 3, 5, 7, 9];
let numerosMaioresQue5 = numeros2.filter(num => num > 5);
console.log("Números maiores que 5:", numerosMaioresQue5);
