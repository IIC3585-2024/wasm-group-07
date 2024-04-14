import Module from './func/O2_factorization.js';

let myModule = null;

Module().then(module => {
    myModule = module;
}).catch(console.error);

export default function O2Factorization(n) {

        // Get the input value and split it into an array of numbers
        const number = BigInt(n);
    
        // Create a BigInt64Array with a size of 64
        const bigint64Array = new BigInt64Array(64);
    
        // Allocate memory for the BigInt64Array in the WebAssembly module
        const pointer = myModule._malloc(bigint64Array.length * bigint64Array.BYTES_PER_ELEMENT);
    
        // Set the memory address of the BigInt64Array in the WebAssembly module
        myModule.HEAP64.set(bigint64Array, pointer / BigInt64Array.BYTES_PER_ELEMENT);
    
        // Call the prime_factorization function from the WebAssembly module
        const _prime_factorization = myModule.cwrap('PrimeFactorization', "number", ['bigint', "[bigint]"]);
    
        // Call the prime_factorization function from the WebAssembly module
        const counter = _prime_factorization(number, pointer);
    
       // from pointer to BigInt64Array
        const resultArray = new BigInt64Array(myModule.HEAP32.buffer, pointer, counter);
        
        // // Free the allocated memory
        myModule._free(pointer);
    
        return resultArray;
}