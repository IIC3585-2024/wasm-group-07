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

async function runFactorizations() {

    const waitingMessage = document.getElementById('waitingMessage');
    waitingMessage.style.visibility = 'visible';
    // Clear the table
    document.getElementById('resultTableBody').innerHTML = '';

    // Run the unoptimized WebAssembly function and save the factors to a list
    const number = document.getElementById('numberInput').value;

    if (number === '') {
        alert("Please enter a number.");
        waitingMessage.style.visibility = 'hidden';
        return;
    }

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        waitingMessage.style.visibility = 'hidden';
        return;
    }

    if (!isCalculationSafe(number)) {
        alert("The number is too large to calculate. Please enter a smaller number.");
        waitingMessage.style.visibility = 'hidden';
        return;
    }

    for (const factorization of factorizations) {
        await factorize(factorization.name, factorization.func, number);
    }

    waitingMessage.style.visibility = 'hidden';
}
function factorize(algorithmName, algorithmFunction, number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const startTime = performance.now();
        const factors = algorithmFunction(number);
        const endTime = performance.now();
        const duration = (endTime - startTime);
        addFactorsToList(algorithmName, factors, duration);
        resolve();
        }, 0);
    });
}

function addFactorsToList (factorizationName, factors, duration) {
    const tableRow = document.createElement('tr');
    const algorithmDiv = document.createElement('td');
    const resultDiv = document.createElement('td');
    const durationDiv = document.createElement('td');
    
    algorithmDiv.textContent = factorizationName;
    algorithmDiv.className = 'text-center';
    tableRow.appendChild(algorithmDiv);

    resultDiv.textContent = factors.join(' · ');
    resultDiv.className = 'text-left';
    resultDiv.style.whiteSpace = 'pre-line';
    tableRow.appendChild(resultDiv);

    durationDiv.textContent = `${duration} ms`;

    let durationStr = duration.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0];
    if (!durationStr.includes('.')) {
        durationStr += '.000';
    } else if (durationStr.match(/\.(\d+)/)[1].length < 3) {
        durationStr += '0'.repeat(3 - durationStr.match(/\.(\d+)/)[1].length);
    }

    durationDiv.textContent = durationStr + " ms";
    durationDiv.className = 'text-right';
  
    tableRow.appendChild(durationDiv);

    document.getElementById("resultTableBody").appendChild(tableRow);
}

function isCalculationSafe(number) {
    return BigInt(number) < 9223372036854775807n;
}

window.runFactorizations = runFactorizations;