// ------------------------------------------NÚMEROS------------------------------------------

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.
function sum(a, b) {
	return a + b;
}
console.log(sum(3, 5));

// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.
let substract = (a, b) => {
	return a - b;
}; //arrow function
console.log(substract(9, 2));

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function multiply(a, b) {
	return a * b;
}
console.log(multiply(6, 8));

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
let divide = (a, b) => {
	return a / b;
};
console.log(divide(15, 5));

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function squared(a, b) {
	return a ** b;
}
console.log(squared(5, 2));

// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
let remainder = (a, b) => {
	return a % b;
};
console.log(remainder(18, 5));

// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function squareRoot(a) {
	return a ** 0.5; //matemáticamente calcular raíz cuadrada es lo mismo que elevar al exponente 1/2
}
console.log(squareRoot(49));

// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
let absolutValue = (a) => {
	return Math.abs(a);
};
console.log(absolutValue(-89));

// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function roundToNearest(a) {
	return Math.round(a);
}
console.log(roundToNearest(93.44532));

// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function generateRandom() {
	return Math.random() * 1;
}
console.log(generateRandom());

// ------------------------------------------LETRAS------------------------------------------

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concatStrings(string1, string2) {
	if (typeof string1 !== 'string' || typeof string2 !== 'string') {
		throw new Error('Both arguments must be strings');
	}
	return string1 + string2;
}
console.log(concatStrings('Hello', ' World'));
// console.log(concat(3, 4)); debería lanzar error porque los argumentos son de tipo number

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
let stringLength = (string) => {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	}
	return string.length;
};
console.log(stringLength('Supercalifragilisticoespialidoso'));

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
let stringToUpper = (string) => {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	}
	return string.toUpperCase();
};
console.log(stringToUpper('patito'));

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
let stringToLower = (string) => {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	}
	return string.toLowerCase();
};
console.log(stringToLower('pAtIto'));

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function charAtPosition(string, index) {
	if (typeof string !== 'string' || typeof index !== 'number') {
		throw new Error('Arguments must be a string and a number');
	}
	return string.charAt(index);
}
console.log(charAtPosition('otorrinolaringología', 6));

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function reverse(string) {
	if (typeof string !== 'string') {
		throw new Error('Arguments must be a string and a number');
	}
	return string.split('').reverse().join('');
}
console.log(reverse('Esto se come con queso'));

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function countCharacter (string, char){
	if (typeof string !== 'string'|| typeof char !== 'string' || char.length !== 1) {
		throw new Error('Arguments must be a string and a character');
	};
	let count = 0;
	for (let i=0; i < string.length; i++){
		if (string.charAt(i) == char){
		 count +=1;
		}
	}
	return count;
}
console.log(countCharacter('barbería', 'a'));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function deleteSpaces (string){
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	};
	return string.split(' ').join('');
}
console.log(deleteSpaces('Por qué todo junto se escribe separado y separado se escribe todo junto??'));

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function isPalindrome (word){
	let reverseWord = reverse(word) //estoy llamando a la función reverse del ejercicio 6 
	if (word === reverseWord){
		return true;
	} else{
		return false;
	}
}
console.log(isPalindrome('banana'));
console.log(isPalindrome('anana'));

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function firstToUpper(string) {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	};
    let separatedString = string.split(' ');
    for (let i = 0; i < separatedString.length; i++) {
        let first = separatedString[i][0];
        let toUpper = first.toUpperCase();
        separatedString[i] = toUpper + separatedString[i].slice(1).toLowerCase();
    }
    return separatedString.join(' ');
}
console.log(firstToUpper('hoy me voy a mimir temprano'));

// ------------------------------------------ARRAYS------------------------------------------

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

// ------------------------------------------OBJETOS LITERALES------------------------------------------

// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
