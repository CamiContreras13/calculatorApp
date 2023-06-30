//Agregando valores a la pantalla de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
};

//Boton borrar
function borrar(){
    document.getElementById('pantalla').value = ' ';
};

//Boton calcular 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
};