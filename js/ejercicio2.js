//TRABAJO CON STRINGS
//PARTE A: MANIPULACION BASICA
const segundoEjercico = '             Segundo ejercicio'
console.log(segundoEjercico);
//1) Creacion de la frase
const frase = '        Estoy aprendiendo JavaScript en el CUROC          '
console.log(frase);

//Mostrar longitud
console.log(`Total de caracteres: ${frase.length}`);

//eliminar espacios
console.log(frase.trim());
console.log(`Total de caracteres: ${frase.trim().length}`);

//frase a minusculas
console.log(frase.toUpperCase());

//frases a mayusculas
console.log(frase.toLocaleLowerCase());

//PARTE B: BUSQUEDA Y REEMPLAZO

//1) VERIFICA SI LA FRASE CONTIENE LA PALABRA JAVASCRIPT
console.log(frase.indexOf('JavaScript'));

//2) POSICION DE LA PALABRA CUROC
console.log(frase.indexOf('CUROC'));

//3) REEMPLAZAR CUROC POR UNAH-COPAN
console.log(frase.replace('CUROC', 'UNAH-COPAN'));

//PARTE C: DIVISION Y EXTRACION 
//2) EXTRAE LAS PRIMERAS 6 LINEAS DE LA FRASE
console.log(frase.slice(6));

//3)TOMAR SOLO LA PALABRA JAVASCRIPT USANDO SLICE
console.log(frase.slice(25,36));





