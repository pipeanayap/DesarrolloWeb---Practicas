let resultado = document.getElementById("resultado");
let resultadoCalculado = false; 

function asignar(valor){
    resultado.value += valor;   
    resultadoCalculado = false;

}

function calcular() {
    if (resultado.value !== ''){
        let expresion = resultado.value;
        expresion = expresion.replace(/\)\(/g, ')*(');
        resultado.value = eval(expresion);
        resultadoCalculado = true;
    }else {
        alert('Ingrese una operación');
    }
    
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
    resultado.value = Math.pow(resultado.value,2)

}

function raiz() {
    resultadoCalculado = true;
    resultado.value = Math.sqrt(resultado.value);
}



//RETO HACER CALCULADORA CIENTIFICA -- MINIMO 3 OPERACIONES  


