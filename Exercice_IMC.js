let poid = prompt("Quel est votre poid?");
poid = Number(poid);

let taille = prompt("Quelle est votre taille (en mètre)?");
taille = Number(taille);

function IMC(poid, taille){
    let IMC = poid / Math.pow(taille, 2);
    alert("Votre IMC est de: " + IMC + ".");
};

IMC(poid, taille);
