const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const clone = {...clothes, shoes: {colors: ['yellow', 'purple']}};

console.log(clone);