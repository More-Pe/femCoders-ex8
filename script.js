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
function countCharacter(string, char) {
	if (
		typeof string !== 'string' ||
		typeof char !== 'string' ||
		char.length !== 1
	) {
		throw new Error('Arguments must be a string and a character');
	}
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) == char) {
			count += 1;
		}
	}
	return count;
}
console.log(countCharacter('barbería', 'a'));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function deleteSpaces(string) {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	}
	return string.split(' ').join('');
}
console.log(
	deleteSpaces(
		'Por qué todo junto se escribe separado y separado se escribe todo junto??',
	),
);

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function isPalindrome(word) {
	let reverseWord = reverse(word); //estoy llamando a la función reverse del ejercicio 6
	if (word === reverseWord) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrome('banana'));
console.log(isPalindrome('anana'));

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function firstToUpper(string) {
	if (typeof string !== 'string') {
		throw new Error('Argument must be a string');
	}
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
function arraySum(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			throw new Error('Array must contain only numbers');
		}
		sum += arr[i];
	}
	return sum;
}
console.log(arraySum([1, 2, 3, 4]));

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function arrayAverage(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			throw new Error('Array must contain only numbers');
		}
		sum += arr[i];
	}
	return sum / arr.length;
}
console.log(arrayAverage([10, 20, 30, 40]));

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function sortAscending(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	arr.sort((a, b) => {
		return b - a;
	});
	return arr;
}
console.log(sortAscending([8, 4, 9, 0, 1, 2]));

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function greaterThan(arr, num) {
	if (!Array.isArray(arr) || typeof num != 'number') {
		throw new Error('Argument must be an array and a number');
	}
	return arr.filter(function (element) {
		return element > num;
	});
}
console.log(greaterThan([2, 4, 7, 3, 9, 20, 55, 107], 50));

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function combineArrays(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		throw new Error('Arguments must be arrays');
	}
	return [...arr1, ...arr2];
}
console.log(combineArrays([1, 2, 3, 4], [5, 6, 7, 8]));

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
function arrayMax(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			throw new Error('Array must contain only numbers');
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
console.log(arrayMax([1, 2, 3, 4, 5]));

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
function arrayMin(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			throw new Error('Array must contain only numbers');
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
console.log(arrayMin([1, 2, 3, 4, 5]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
function countElement(arr, element) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			count += 1;
		}
	}
	return count;
}
console.log(
	countElement(
		['banana', 'pera', 'piña', 'manzana', 'piña', 'fresa', 'piña'],
		'piña',
	),
);

// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
function deleteDuplicates(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArray.includes(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}
console.log(deleteDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
function reverseArray(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Argument must be an array');
	}
	let reversed = arr.reverse();
	return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// ------------------------------------------OBJETOS LITERALES------------------------------------------

// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
function getName(obj) {
	if (typeof obj !== 'object' || obj === null || !('nombre' in obj)) {
		throw new Error('Argument must be an object that has the property nombre');
	}
	return obj.nombre;
}
console.log(getName({ nombre: 'Arturo', edad: 25 }));

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
function changeAge(obj, edad) {
	if (
		typeof obj !== 'object' ||
		obj === null ||
		!('edad' in obj) ||
		typeof edad !== 'number'
	) {
		throw new Error(
			'Arguments must be an object that has the property edad, and a number',
		);
	}
	obj.edad = edad;
	return obj.edad;
}
console.log(changeAge({ edad: 25 }, 26));

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function addProperty(obj, name) {
	if (typeof obj !== 'object' || obj === null || typeof name !== 'string') {
		throw new Error('Arguments must be an object and a string');
	}
	obj[name] = null;
	return obj;
}
console.log(addProperty({ fruit: 'strawberry' }, 'price'));

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
function removeProperty(obj, property) {
	if (typeof obj !== 'object' || obj === null || typeof property !== 'string') {
		throw new Error('Arguments must be an object and a string');
	}
	delete obj[property];
	return obj;
}
console.log(removeProperty({ fruit: 'strawberry', price: 3 }, 'price'));

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
function countPropertys(obj) {
	if (typeof obj !== 'object' || obj === null) {
		throw new Error('Argument must be an object');
	}
	return Object.keys(obj).length;
}
console.log(countPropertys({ name: 'Morena', age: 33, city: 'Valencia' }));

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
function hasProperty(obj, name) {
	if (typeof obj !== 'object' || obj === null || typeof name !== 'string') {
		throw new Error('Arguments must be an object and a string');
	}
	return Object.hasOwn(obj, name);
}
console.log(hasProperty({ fruit: 'strawberry', price: 3 }, 'price'));

// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
function getValues(obj) {
	if (typeof obj !== 'object' || obj === null) {
		throw new Error('Argument must be an object');
	}
	return Object.values(obj);
}
console.log(getValues({ fruit: 'strawberry', price: 3 }));

// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
function compareObjects(obj1, obj2) {
	if (
		typeof obj1 !== 'object' ||
		typeof obj2 !== 'object' ||
		obj1 === null ||
		obj2 === null
	) {
		throw new Error('Arguments must be two no nulls objects');
	}
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) {
		return false;
	}
	for (let key of keys1) {
		if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true;
}
console.log(compareObjects({ name: 'Ana' }, { name: 'Ana' }));
console.log(compareObjects({ name: 'Ana', age: 32 }, { name: 'Ana', age: 33 }));

// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
function copyObject(obj) {
	if (typeof obj !== 'object' || obj === null) {
		throw new Error('Argument must be an object');
	}
	const copy = { ...obj };
	return copy;
}
console.log(copyObject({ name: 'Ana', age: 22 }));

// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
function combineObjects(obj1, obj2) {
	if (
		typeof obj1 !== 'object' ||
		typeof obj2 !== 'object' ||
		obj1 === null ||
		obj2 === null
	) {
		throw new Error('Arguments must be two no nulls objects');
	}
	return { ...obj1, ...obj2 };
}
console.log(
	combineObjects({ name: 'Julieta', age: 32 }, { age: 33, city: 'Barcelona' }),
);
