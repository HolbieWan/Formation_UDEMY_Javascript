let preparation = 10, cuisson = 15;

function tempsCuisine(nombreGateaux, tempsPreparation=10, tempsCuisson=15) {
    let tempsTotal = nombreGateaux * (tempsPreparation + tempsCuisson);
    return(tempsTotal);
}

console.log(tempsCuisine(5))