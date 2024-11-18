function addition(nombreA, nombreB) {
    let resultat = nombreA + nombreB;
    console.log(resultat);
}

addition(4, 9, 5, 415, 78, 54);


function addition2(...nombres) {
    nombres.forEach(nombre => {
        console.log(nombre);
    })
}

function addition3(...nombres) {
    resultat = 0;
    nombres.forEach((nombre) => {
    resultat += nombre;
    });
    console.log(resultat)
}

addition(4, 9, 5, 415, 78, 54);
addition2(4, 9, 5, 415, 78, 54);
addition3(4, 9, 5, 415, 78, 54);

