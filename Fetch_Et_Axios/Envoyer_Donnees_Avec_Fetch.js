const url = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=John');

// requete.onload = function() {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de revenir plus tard.');
//     }
//   }
// }

async function envoyerPrenom(prenom) {
  const requete = await fetch(url, {
    method: 'POST', /*PUT, PATCH, ...*/
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      prenom
    })
  });

  if (!requete.ok) {
    alert("Une erreur est survenue");
  } else {
    const reponse = await requete.json();
    console.log(reponse);
  }
}

envoyerPrenom("Majax");

// async function envoyerPrenom(prenom) {
//   const requete = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/JSON",
//     },
//     body: {
//       prenom,
//       age,
//       nom
//     },
//   });

//   if (!requete.ok) {
//     alert("Une erreur est survenue");
//   } else {
//     const reponse = await requete.json();
//     console.log(reponse);
//   }
// }
