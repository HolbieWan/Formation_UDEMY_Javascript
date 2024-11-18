let VoitureA = {
  constructeur: "Tesla",
  modele: "S",
};

let VoitureB = {
  constructeur: "Porsche",
  modele: "911",
};

// Create a WeakSet with initial objects
let voitures = new WeakSet([VoitureA, VoitureB]);

// Add objects to the WeakSet (unnecessary here because they're already added)
voitures.add(VoitureA);
voitures.add(VoitureB);

// Check if objects are in the WeakSet
console.log(voitures.has(VoitureA)); // true
console.log(voitures.has(VoitureB)); // true

// Remove an object from the WeakSet
voitures.delete(VoitureA);

// Check again after deletion
console.log(voitures.has(VoitureA)); // false
console.log(voitures.has(VoitureB)); // true
