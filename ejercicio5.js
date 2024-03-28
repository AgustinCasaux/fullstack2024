"use strict";
// Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
// Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
Object.defineProperty(exports, "__esModule", { value: true });
var reallineSync = require("readline-sync");
var tamaño = reallineSync.questionInt('Ingrese la cantidad de numeros a guardar:');
var numerosGuardados = new Array(tamaño);
var i;
for (i = 0; i < tamaño; i++) {
    numerosGuardados[i] = reallineSync.questionInt("ingrese el numero " + (i + 1) + ":");
}
var numPositivos = 0;
var numNegativos = 0;
var numCeros = 0;
for (i = 0; i < tamaño; i++) {
    if (numerosGuardados[i] == 0) {
        numCeros++;
    }
    else if (numerosGuardados[i] > 0) {
        numPositivos++;
    }
    else {
        numNegativos++;
    }
}
console.log('Tenemos ' + numPositivos + ', positivos ' + numNegativos + ' negativos y ' + numCeros + ' cero.');
