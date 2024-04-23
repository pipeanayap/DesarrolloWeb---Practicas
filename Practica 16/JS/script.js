// Definimos la variable 'hora' y le asignamos el valor 14
let hora = 14;

// Utilizamos una estructura condicional if-else if-else para determinar la frase de saludo dependiendo de la hora
if(hora < 12) {
    console.log("Buenos días"); // Si la hora es menor a 12, imprimimos "Buenos días"
} else if(hora < 19) {
    console.log("Buenas tardes"); // Si la hora es mayor o igual a 12 y menor a 19, imprimimos "Buenas tardes"
} else {
    console.log("Buenas noches"); // Si la hora es mayor o igual a 19, imprimimos "Buenas noches"
}

// Obtenemos el día de la semana como un número entero (0-6) y lo almacenamos en la variable 'diaDeLaSemana'
let diaDeLaSemana = new Date().getDay();
diaDeLaSemana = 5;

// Imprimimos el valor de 'diaDeLaSemana' en la consola
console.log(diaDeLaSemana);

// Utilizamos una estructura switch-case para determinar el día de la semana correspondiente al número entero
switch(diaDeLaSemana) {
    case 0: // Si el día es 0
        console.log("Domingo"); // Imprimimos "Domingo"
        break;
    case 1: // Si el día es 1
        console.log("Lunes"); // Imprimimos "Lunes"
        break;
    case 2: // Si el día es 2
        console.log("Martes"); // Imprimimos "Martes"
        break;
    case 3: // Si el día es 3
        console.log("Miércoles"); // Imprimimos "Miércoles"
        break;
    case 4: // Si el día es 4
        console.log("Jueves"); // Imprimimos "Jueves"
        break;
    case 5: // Si el día es 5
        console.log("Viernes"); // Imprimimos "Viernes"
        break;
    case 6: // Si el día es 6
        console.log("Sábado"); // Imprimimos "Sábado"
        break;
    default: // Si el día no es ninguno de los anteriores
        console.log("El valor ingresado no corresponde a un día de la semana válido."); // Imprimimos un mensaje de error
}