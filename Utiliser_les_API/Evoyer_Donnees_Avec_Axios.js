import axios from "axios";

const url = "https://lesoublisdelinfo.com/api.php";

axios
  .get(url)
  .then((response) => {
    console.log(response.data); // Handle the JSON response
  })
  .catch((error) => {
    console.error("Erreur:", error.message);
  });


axios
  .post(url, "prenom=John", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  .then((response) => {
    console.log("POST Response:", response.data);
  })
  .catch((error) => {
    console.error("Erreur:", error.message);
  });