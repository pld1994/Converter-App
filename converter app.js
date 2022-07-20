/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num = 0
let inputValue = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function numInput(){
    num = inputValue.value
    convertMetres()
    convertLitres()
    convertMass()
}

function convertMetres(){
    let metres = (num * 0.3048).toFixed(3)
    let feet = (num * 3.2808).toFixed(3)
    length.textContent = `${num} metres = ${feet} feet | ${num} feet = ${metres} metres` 
}

function convertLitres(){
    let litres = (num * 0.2641).toFixed(3)
    let gallons = (num * 3.7854).toFixed(3)
    volume.textContent = `${num} litres = ${gallons} gallons | ${num} gallons = ${litres} litres`
}

function convertMass(){
    let kilos = (num * 2.2046).toFixed(3)
    let pounds = (num * 0.4535).toFixed(3)
    mass.textContent = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilos} kilograms`
}
