import unoptimizedFactorization from './unoptimized.js';
import basicFactorization from './basicFactorization.js';
import O1Factorization from './o1.js';
import O2Factorization from './o2.js';
import O3Factorization from './o3.js';

const factorizations = [
    { name: "Unoptimized C", func: unoptimizedFactorization },
    { name: "O1 C", func: O1Factorization },
    { name: "O2 C", func: O2Factorization },
    { name: "O3 C", func: O3Factorization },
    { name: "Pure JS", func: basicFactorization }
]

function runFactorizations() {
    console.log("Running factorizations");
    // Clear the table
    document.getElementById('resultTableBody').innerHTML = '';

    // Run the unoptimized WebAssembly function and save the factors to a list
    const number = document.getElementById('numberInput').value;
    if (!isCalculationSafe(number)) {
        alert("The number is too large to calculate. Please enter a smaller number.");
        return;
    }
    factorizations.forEach(factorization => factorize(factorization.name, factorization.func, number));
}

function factorize(algorithmName, algorithmFunction, number) {
    const startTime = performance.now();
    const factors = algorithmFunction(number);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`[JS] Times: ${duration} ms`);
    addFactorsToList(algorithmName, factors, duration);
}

function addFactorsToList (factorizationName, factors, duration) {
    const tableRow = document.createElement('tr');
    const algorithmDiv = document.createElement('td');
    const resultDiv = document.createElement('td');
    const durationDiv = document.createElement('td');
    
    algorithmDiv.textContent = factorizationName;
    tableRow.appendChild(algorithmDiv);

    resultDiv.textContent = factors;
    tableRow.appendChild(resultDiv);

    durationDiv.textContent = `${duration} ms`;
    tableRow.appendChild(durationDiv);

    document.getElementById("resultTableBody").appendChild(tableRow);
}

function isCalculationSafe(number) {
    return number < Number.MAX_SAFE_INTEGER;
}

window.runFactorizations = runFactorizations;