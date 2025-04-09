// ------------------------------------------NÚMEROS------------------------------------------

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar(a, b) {
	return a + b;
}
console.log(sumar(3, 5));

// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.
let restar = (a, b) => {
	return a - b;
}; //arrow function
console.log(restar(9, 2));

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function producto(a, b) {
	return a * b;
}
console.log(producto(6, 8));

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
let division = (a, b) => {
	return a / b;
};
console.log(division(15, 5));

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function potencia(a, b) {
	return a ** b;
}
console.log(potencia(5, 2));

// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
let resto = (a, b) => {
	return a % b;
};
console.log(resto(18, 5));

// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function raiz(a) {
	return a ** 0.5; //matemáticamente calcular raíz cuadrada es lo mismo que elevar al exponente 1/2
}
console.log(raiz(49));

// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
let absoluto = (a) => {
	return Math.abs(a);
};
console.log(absoluto(-89));

// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function redondeo(a) {
	return Math.round(a);
}
console.log(redondeo(93.44532));

// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function random() {
	return Math.random() * 1;
}
console.log(random());

// ------------------------------------------LETRAS------------------------------------------

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concat(string1, string2) {
	if (typeof string1 !== 'string' || typeof string2 !== 'string') {
		throw new Error('Ambos argumentos deben ser strings');
	}
	return string1 + string2;
}
console.log(concat('Hello', ' World'));
// console.log(concat(3, 4)); debería lanzar error porque los argumentos son de tipo number

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
let longitud = (string3) => {
	if (typeof string3 !== 'string') {
		throw new Error('El argumento debería ser un string');
	}
	return string3.length;
};
console.log(longitud('Supercalifragilisticoespialidoso'));

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

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
