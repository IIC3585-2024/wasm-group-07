#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Prime factorization based on: https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
int PrimeFactorization(long long n, long long* factors) {
    int count = 0;

    while (n % 2 == 0) {
        factors[count] = 2;
        count++;
        n = n / 2;
    }

    for (int i = 3; i * i <= n; i = i + 2) {
        while (n % i == 0) {
            factors[count] = i;
            count++;
            n = n / i;
        }
    }

    if (n > 2) {
        factors[count] = n;
        count++;
    }

    printf("Cantidad de factores primos: %d \n", count);
    printf("Factores: \n");
    for (int i = 0; i < count; i++) {
        printf("%d \n", factors[i]);
    }

    return count;
}