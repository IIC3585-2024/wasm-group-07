#! /bin/bash

emcc lib/prime_factorization.c -s WASM=1 -s EXPORTED_FUNCTIONS=_PrimeFactorization,_malloc,_free -o func/unoptimized_factorization.js -s EXPORTED_RUNTIME_METHODS=cwrap -s MODULARIZE=1 -s EXPORT_ES6=1 -sWASM_BIGINT
emcc lib/prime_factorization.c -s WASM=1 -s EXPORTED_FUNCTIONS=_PrimeFactorization,_malloc,_free -o func/O1_factorization.js -s EXPORTED_RUNTIME_METHODS=cwrap -s MODULARIZE=1 -s EXPORT_ES6=1 -sWASM_BIGINT -O1
emcc lib/prime_factorization.c -s WASM=1 -s EXPORTED_FUNCTIONS=_PrimeFactorization,_malloc,_free -o func/O2_factorization.js -s EXPORTED_RUNTIME_METHODS=cwrap -s MODULARIZE=1 -s EXPORT_ES6=1 -sWASM_BIGINT -O2
emcc lib/prime_factorization.c -s WASM=1 -s EXPORTED_FUNCTIONS=_PrimeFactorization,_malloc,_free -o func/O3_factorization.js -s EXPORTED_RUNTIME_METHODS=cwrap -s MODULARIZE=1 -s EXPORT_ES6=1 -sWASM_BIGINT -O3