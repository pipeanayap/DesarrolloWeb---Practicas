let resultado = document.getElementById("resultado");
let resultadoCalculado = false; 
arregloHistorial = []

function asignar(valor){
    resultado.value += valor;   
    resultadoCalculado = false;

}

function calcular() {
    if (resultado.value !== ''){
        let expresion = resultado.value;

        // Reemplazar paréntesis sin operador explícito entre ellos con un operador de multiplicación *
        expresion = expresion.replace(/\)\(/g, ')*(');
        
        // Manejar casos de multiplicación implícita (como 3(9))
        expresion = expresion.replace(/(\d+)\(/g, '$1*(');

        // Evaluar la expresión
        let resultadoCalculado = eval(expresion);

        // Concatenar la expresión original y el resultado calculado para imprimir
        let temporal = expresion + " = " + resultadoCalculado;

        // Llamar a la función para imprimir
        imprimirResultado(temporal);

        // Asignar el resultado a la caja de texto
        resultado.value = resultadoCalculado;

    } else {
        alert('Ingrese una operación');
    }
}

function imprimirResultado(temporal){
    let impresiones = document.getElementById('impresiones');
    arregloHistorial.push(temporal);

    impresiones.innerHTML = "";

    arregloHistorial.forEach((temporal) => {
        impresiones.innerHTML += `
        <div style="text-align: center;">
            <strong>${temporal}</strong>
        </div>
        `;
    });
    
    console.log(arregloHistorial);
}



function limpiar() {
    let expresion = resultado.value;
    if (resultadoCalculado) {
        resultado.value = ''; // Si se ha calculado un resultado, borrar toda la expresión
    } else {
    resultado.value = expresion.slice(0, -1); // Eliminar el último carácter    
    }
}

function potencia(){
    resultadoCalculado = true;
     // Llamar a la función para imprimir
    resultado.value = Math.pow(resultado.value,2)


}

function raiz() {
    resultadoCalculado = true;
    resultado.value = Math.sqrt(resultado.value);
}

function caritaFeliz(){
    resultadoCalculado = true;
    resultado.value = "Te amo"
}

function caritaTriste(){
    resultadoCalculado = true;
    resultado.value = "Te odio"
}

function factorial() {
    let num = resultado.value;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    resultado.value = result;
    resultadoCalculado = true;
}

function cerrarCientifica() {
    // Remover la clase de la calculadora para volver a su tamaño original
    document.querySelector('.calculator').classList.remove('calculator-ampliada');
    document.querySelector('.calculator').classList.remove('buttons-ampliados');
    // Ocultar los botones adicionales de funciones trigonométricas
    let botonesDesplegables = document.querySelectorAll('#desplegables');
    botonesDesplegables.forEach(function(boton) {
        boton.style.display = 'none';
    });
}

// Modifica la función abrirCientifica para que también llame a la función cerrarCientifica
function abrirCientifica() {
    // Si la calculadora ya está ampliada, se cierra
    if (document.querySelector('.calculator').classList.contains('calculator-ampliada')) {
        cerrarCientifica();
        // Cambiar el texto del botón a "Normal"
        document.getElementById("cientific").innerText = "Científica";
    } else {
        // De lo contrario, se expande
        document.querySelector('.calculator').classList.add('calculator-ampliada');
        document.querySelector('.calculator').classList.add('buttons-ampliados');
        // Mostrar los botones adicionales de funciones trigonométricas
        let botonesDesplegables = document.querySelectorAll('#desplegables');
        botonesDesplegables.forEach(function(boton) {
            boton.style.display = 'inline-block';
        });
        // Cambiar el texto del botón a "Normal"
        document.getElementById("cientific").innerText = "Normal";
    }
}













//RETO HACER CALCULADORA CIENTIFICA -- MINIMO 3 OPERACIONES 

