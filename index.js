const { basicFactorization } = require('./basicFactorization');

n = process.argv[2];

factors = basicFactorization(n);
console.log(factors.join(' '));