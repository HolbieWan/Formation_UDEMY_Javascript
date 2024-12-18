// import axios from "./node_modules/axios/dist/axios.min.js";

const url = "https://blockchain.info/ticker";

// async function recupererPrix() {
// Créer une requête
//   let requete = new XMLHttpRequest(); // Créer un objet
//   requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
//   requete.responseType = 'json'; // Nous attendons du JSON
//   requete.send(); // Nous envoyons notre requête

//   // Dèss qu'on reçoit une réponse, cette fonction est executée
//   requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response; // on stock la réponse
//         let prixEnEuros = reponse.EUR.last;
//         document.querySelector('span').textContent = prixEnEuros;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
//   }
//   console.log('Prix actualisé');
//   const requete = await fetch(url, {
//       method: "GET"
//     })
//     if (!requete.ok) {
//       alert("Un probleme est survenu");
//     } else {
//       const donnes = await requete.json();
//       console.log(donnes)
//       document.querySelector("span").textContent = donnes.EUR.last;
//   }
//   }

// setInterval(recupererPrix, 1000);

async function recupererPrix() {
  axios
    .get(url)
    .then(function (donnees) {
      console.log(donnees);
      document.querySelector('span').textContent = donnees.data.EUR.last;
    })
    .catch(function (erreur) {
      alert("Un probleme est survenu");
    })
    .then(function () {
      console.log('mise à jour effectuee');
    })
}

setInterval(recupererPrix, 1000);
