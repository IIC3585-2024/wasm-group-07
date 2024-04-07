#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Prime factorization based on: https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
void basicPrimeFactorization(long long n) {
    while (n % 2 == 0) {
        printf("%d ", 2);
        n = n / 2;
    }

    for (int i = 3; i * i <= n; i = i + 2) {
        while (n % i == 0) {
            printf("%d ", i);
            n = n / i;
        }
    }

    if (n > 2) {
        printf("%lld ", n);
    }
}

int main(int argc, char** argv) {
    if (argc != 2) {
        printf("Usage: %s <number>\n", argv[0]);
        return 1;
    }

    basicPrimeFactorization(atoll(argv[1]));
    return 0;
}