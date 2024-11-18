let monMap = new Map([
    ['prenom', 'Mark'],
    ['nom', 'Zuckerberg']
]);

monMap.set('poste', 'pdg de facebook');
monMap.delete('poste');

console.log(monMap);


let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG'
});

utilisateurs.set("Bill Gates", {
  email: "bill@microsoft.com",
  poste: "Vaccine VRP",
});

console.log(utilisateurs);