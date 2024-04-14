export default function basicFactorization(n) {
  n = BigInt(n);
  let factors = [];
  while (n % 2n === 0n) {
    factors.push(2n);
    n = n / 2n;
  }

  for (let i = 3n; i * i <= n; i = i + 2n) {
    while (n % i === 0n) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2n) {
    factors.push(n);
  }

  return factors;
}