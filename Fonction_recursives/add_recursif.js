function somme(number, result) {
    if (number == 0) {
        return 0;
    }
    {
        return number + somme(number - 1)
    }
};

console.log(somme(5))