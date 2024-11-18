let voitures = new WeakMap();

let index = {
    id: 1
}

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

voitures.set(index, voitureA)
console.log(voitures.has(index));

voitures.delete(index);
console.log(voitures.has(index));


// Key Points About WeakMap:

// 	1.	Key-Value Pairs:
// 	•	A WeakMap stores key-value pairs, where the keys must be objects, and the values can be any type.
// 	•	Unlike WeakSet, a WeakMap does not store values directly; instead, it associates a value with a specific object key.
// 	2.	The has() Method:
// 	•	WeakMap.has(key) checks if a specific key exists in the WeakMap. It does not check for the presence of a value.