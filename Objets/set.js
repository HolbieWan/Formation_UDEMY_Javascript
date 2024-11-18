let nombres = [23, 45, 23, 34, 56, 78];
let monSet = new Set(nombres);

console.log(monSet);

monSet.add(56);
monSet.delete(70);

console.log(monSet);
console.log(monSet.size);
