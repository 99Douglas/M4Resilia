function somaArray(...arr) {
    return arr.reduce((total, numero) => {
        return total + numero
    }, 0);
};

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

console.log(somaArray(...array));