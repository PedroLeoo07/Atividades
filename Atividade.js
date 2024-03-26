let numeros = [1, 14, 13, 14, 15, 16, 17, 18, 19, 20];
let par = [];
let impar = [];
let i = 0;

while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        par.push(numeros[i]);
    } else {
        impar.push(numeros[i]);
    }
    i++;
}
par.sort((a, b) => a - b);
impar.sort((a, b) => a - b);

par.reverse();

console.log("Números pares:", par);
console.log("Números ímpares:", impar);
