function prevoirAge(){
    let age = prompt("Quel est votre age?");
    // age = parseFloat(age);
    age = Number(age);
    alert("Bientot vous aurez " + (age + 1) + " ans.")
}

prevoirAge()