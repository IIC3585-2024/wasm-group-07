#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_FACTORS 60

// Prime factorization based on: https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
int basicPrimeFactorization(long long n, int* factors) {
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

    return count;
}

int main(int argc, char** argv) {
    if (argc != 2) {
        printf("Usage: %s <number>\n", argv[0]);
        return 1;
    }

    long long num = atoll(argv[1]);
    int factors[MAX_FACTORS];

    int count = basicPrimeFactorization(num, factors);
    printf("Cantidad de factores primos: %d \n", count);
    printf("Factores: \n");
    for (int i = 0; i < count; i++) {
        printf("%d \n", factors[i]);
    }
    return 0;
}