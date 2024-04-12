import { unoptimizedFactorization } from './unoptimized.js';

function runFactorizations() {
    console.log("Running factorizations");
    // Run the unoptimized WebAssembly function and save the factors to a list
    addFactorsToList("resultTableBody", unoptimizedFactorization());
}

function addFactorsToList (parentId, factors) {
    const resultDiv = document.createElement('td');
    
    resultDiv.textContent = factors;

    document.getElementById(parentId).appendChild(resultDiv);
}

window.runFactorizations = runFactorizations;
