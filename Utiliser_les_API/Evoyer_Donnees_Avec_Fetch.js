import fetch from "node-fetch"; // Make sure to import fetch

const url = "https://lesoublisdelinfo.com/api.php";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Un problème est intervenu, merci de revenir plus tard.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Handle the JSON data
  })
  .catch((error) => {
    console.error("Erreur:", error.message);
  });


  
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "prenom=John", // Data to send
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Un problème est intervenu, merci de revenir plus tard.");
    }
    return response.json();
  })
  .then((data) => {
    console.log("POST Response:", data);
  })
  .catch((error) => {
    console.error("Erreur:", error.message);
  });