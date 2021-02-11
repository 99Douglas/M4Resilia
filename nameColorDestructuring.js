const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
};

const {name} = company;

const {products: {shirts: cores1}} = company;

const {products: {socks: cores2}} = company;