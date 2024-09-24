// Ejercicio 1
console.log('*********** Ejercicio 1 ***********');

function esMayorDeEdad(edad) {
    return edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
}
console.log(esMayorDeEdad(16));

// Ejercicio 2
console.log('\n\n*********** Ejercicio 2 ***********');
var notaExamen = 7;
var notaTareas = 8;
var notaAsistencia = 10;
var notaInvestigacion = 9;
var nombreAlumno = 'Juan';
var carnetAlumno = '2019-12345';

function calcularNotaFinal(notaExamenParam, notaTareasParam, notaAsistenciaParam, notaInvestigacionParam) {
    return (notaExamenParam * 0.6) + (notaTareasParam * 0.1) + (notaAsistenciaParam * 0.1) + (notaInvestigacionParam * 0.2);
}
console.log(`La nota final del alumno ${nombreAlumno} con el numero de carnet ${carnetAlumno} es de ${calcularNotaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion)}`);

// Ejercicio 3
console.log('\n\n*********** Ejercicio 3 ***********');
var nombre = 'Josefo';
var salario = 1000;
var categoria = 'A';
var aumento = 0;

function calcularAumento(salarioParam, categoriaParam) {
    switch (categoriaParam) {
        case 'A':
            aumento = salarioParam * 0.15;
            break;
        case 'B':
            aumento = salarioParam * 0.30;
            break;
        case 'C':
            aumento = salarioParam * 0.10;
            break;
        case 'D':
            aumento = salarioParam * 0.20;
            break;
        default:
            aumento = 0;
            break;
    }
    return aumento;
}
console.log(`El aumento salarial del empleado ${nombre} con salario de $${salario} y categoria ${categoria} es de $${calcularAumento(salario, categoria)}`);

// Ejercicio 4
console.log('\n\n*********** Ejercicio 4 ***********');

function calcularNumeroMayor(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log(`El numero mayor entre 5 y 10 es ${calcularNumeroMayor(5, 10)}`);

// Ejercicio 5
console.log('\n\n*********** Ejercicio 5 ***********');

const vehiculoEnVenta = "FORD ESCAPE"
const precioVehiculo = 20000;

function calcularDescuento(vehiculoEnVentaParam, precioVehiculoParam){
    switch(vehiculoEnVentaParam){
        case "FORD FOCUS":
            return precioVehiculoParam * 0.10;
        case "FORD ESCAPE":
            return precioVehiculoParam * 0.20;
        case "FORD FIESTA":
            return precioVehiculoParam * 0.05;
        default:
            return 0.0;
    }
}
const resultado = document.getElementById('resultado5');

resultado.textContent = `El descuento del vehiculo ${vehiculoEnVenta} con un costo de $${precioVehiculo} es de $${calcularDescuento(vehiculoEnVenta, precioVehiculo)}`;
console.log(`El descuento del vehiculo ${vehiculoEnVenta} con un costo de $${precioVehiculo} es de $${calcularDescuento(vehiculoEnVenta, precioVehiculo)}`);

// Ejercicio 6
console.log('\n\n*********** Ejercicio 6 ***********');

const lugarOrigen = "Palma";
const lugarDestino = "Panchimalco";

function calcularDescuentoSegunDestino(lugarDestinoParam){
    switch(lugarDestinoParam){
        case "La costa del Sol":
            return 0.05;
        case "Panchimalco":
            return 0.10;
        case "Puerto el Triunfo":
            return 0.15;
        default:
            return 0.0;
    }
}
console.log(`El descuento por viajar desde ${lugarOrigen} hasta ${lugarDestino} es del ${calcularDescuentoSegunDestino(lugarDestino) * 100}%`);

// Ejercicio 7
console.log('\n\n*********** Ejercicio 7 ***********');

const numerosIngresados = [1, -35, -43, 25, 14, 6, 70, 31, 90, -80, -55, 42, -67, 75, -23, 19, -91, 34, -76, 58];


function calcularNumerosPositivos(numerosIngresadosParam){
    let contador = 0;
    for(let i = 0; i < numerosIngresadosParam.length; i++){
        if(numerosIngresadosParam[i] > 0){
            contador++;
        }
    }
    return contador;
}
console.log(`La cantidad de números positivos ingresados es de ${calcularNumerosPositivos(numerosIngresados)}`);

function calcularNumerosNegativos(numerosIngresadosParam){
    let contador = 0;
    for(let i = 0; i < numerosIngresadosParam.length; i++){
        if(numerosIngresadosParam[i] < 0){
            contador++;
        }
    }
    return contador;
}
console.log(`La cantidad de números negativos ingresados es de ${calcularNumerosNegativos(numerosIngresados)}`);

function calcularMultiplosDeQuince(numerosIngresadosParam){
    let contador = 0;
    for(let i = 0; i < numerosIngresadosParam.length; i++){
        if(numerosIngresadosParam[i] % 15 === 0){
            contador++;
        }
    }
    return contador;
}
console.log(`La cantidad de números multiplos de 15 ingresados es de ${calcularMultiplosDeQuince(numerosIngresados)}`);

function sumarNumerosPares(numerosIngresadosParam){
    let suma = 0;
    for(let i = 0; i < numerosIngresadosParam.length; i++){
        if(numerosIngresadosParam[i] % 2 === 0){
            suma += numerosIngresadosParam[i];
        }
    }
    return suma;
}
console.log(`La suma de los números pares positivos y negativos ingresados es de ${sumarNumerosPares(numerosIngresados)}`);


// Ejercicio 8
console.log('\n\n*********** Ejercicio 8 ***********');

function crearTablaMultiplicar(numero){
    let tabla = '';
    for(let i = 1; i <= 10; i++){
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabla;
}
console.log(crearTablaMultiplicar(7));

// Ejercicio 9
console.log('\n\n*********** Ejercicio 9 ***********');

const gradosCelcius = 30;

function convertirGradosCelciusAFahrenheit(gradosCelciusParam) {
    let resultado = (gradosCelciusParam * 9/5) + 32;
    let texto;

    switch(true) {
        case resultado >= 14 && resultado < 32:
            texto = 'Temperatura baja';
            break;
        case resultado >= 32 && resultado < 68:
            texto = 'Temperatura adecuada';
            break;
        case resultado >= 68 && resultado < 96:
            texto = 'Temperatura alta';
            break;
        default:
            texto = 'Temperatura desconocida';
            break;
    }

    return { resultado, texto };
}

const conversion = convertirGradosCelciusAFahrenheit(gradosCelcius);
console.log(`La temperatura en grados Fahrenheit es de ${conversion.resultado} y es una ${conversion.texto}`);

// Ejercicio 10
console.log('\n\n*********** Ejercicio 10 ***********');

const turnoMañanaEstudiantesEdad = [15, 16, 17, 18, 19];
const turnoTardeEstudiantesEdad = [20, 21, 22, 23, 24, 17];
const turnoNocheEstudiantesEdad = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 41];

function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }
    return suma / edades.length;
}

const promedioMañana = calcularPromedio(turnoMañanaEstudiantesEdad);
const promedioTarde = calcularPromedio(turnoTardeEstudiantesEdad);
const promedioNoche = calcularPromedio(turnoNocheEstudiantesEdad);

//limitamos a dos decimales, mucho numero xd
console.log(`Promedio de edades del turno mañana: ${promedioMañana.toFixed(2)}`);
console.log(`Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`);

let turnoPromedioMayor;
if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
    turnoPromedioMayor = 'mañana';
} else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
    turnoPromedioMayor = 'tarde';
} else {
    turnoPromedioMayor = 'noche';
}

console.log(`El turno con el promedio de edades mayor es el turno ${turnoPromedioMayor}.`);
