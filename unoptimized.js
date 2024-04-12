export function unoptimizedFactorization() {
    // Get the input value and split it into an array of numbers
    const number = BigInt(document.getElementById('numberInput').value);
    console.log(`[JS] Number: ${number}`);

    // Create a BigInt64Array with a size of 60
    const bigint64Array = new BigInt64Array(60);

    // Allocate memory for the BigInt64Array in the WebAssembly module
    const pointer = Module._malloc(bigint64Array.length * bigint64Array.BYTES_PER_ELEMENT);

    // Separate the memory address of the BigInt64Array into 32-bit integers
    const pointer32 = pointer / 4;
    const pointerHigh = pointer32 + 1;

    // Set the memory address of the BigInt64Array in the WebAssembly module
    Module.HEAP32[pointer32] = pointer;
    Module.HEAP32[pointerHigh] = 0;

    // Call the prime_factorization function from the WebAssembly module
    const _prime_factorization = Module.cwrap('PrimeFactorization', "number", ['bigint', "[bigint]"]);

    // Call the prime_factorization function from the WebAssembly module
    const counter = _prime_factorization(number, pointer);

    console.log(`[JS] Called prime_factorization`);

   // from pointer to BigInt64Array
    const resultArray = new BigInt64Array(Module.HEAP32.buffer, pointer, counter);

    // // Display the result in the HTML
    // const resultDiv = document.getElementById('printArrayResult');

    // const resultArrayString = Array.from(resultArray).join(', ');

    // resultDiv.textContent = `The number ${number} has ${counter} factors: ${resultArrayString}`;
    
    // // Free the allocated memory
    Module._free(pointer);

    return resultArray;
}