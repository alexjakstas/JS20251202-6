"use strict";

let trapecijosIlgojiKrastine = +prompt("Trapecijos ilgesniojo pagrindo ilgis: ");
let trapecijosTrumpojiKrastine = +prompt("Trapecijos trumpesniojo pagrindo ilgis: ");
let trapecijosAukstine = +prompt("Trapecijos aukštinės ilgis: ");

let trapecijosPlotas = (trapecijosIlgojiKrastine +trapecijosTrumpojiKrastine) / 2 * trapecijosAukstine;

console.log("trapecijos plotas: " + trapecijosPlotas);