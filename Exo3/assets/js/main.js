let button = document.getElementById('btnMultiplication');

// création de la fonction 
function multiplication(number1,number2){
    return number1 * number2;
}

// création de la fonction qui récupére les inputs 
button.onclick = () => {
    // on récupére les valeurs des inputs
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    // appelle de la fonction
    let result = multiplication(number1, number2);
    console.log(result)
};