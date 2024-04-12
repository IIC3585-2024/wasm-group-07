import { UnoptimizedWASM } from "./unoptimizedWasm";

function runFactorizations() {
    console.log("Running factorizations");
    // Run the unoptimized WebAssembly function and save the factors to a list
    addFactorsToList("resultTableBody", UnoptimizedWASM());
};

function addFactorsToList (parentId, factors) {
    const resultDiv = document.createElement('td');
    resultDiv.textContent = `The number ${number} has ${counter} factors: ${factors}`;

    document.getElementById(parentId).appendChild(resultDiv);
};

