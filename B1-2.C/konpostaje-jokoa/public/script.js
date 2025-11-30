// This file contains the JavaScript code that implements the game logic and interactivity for the user interface.

function konfirmatu() {
    const hezetasuna = document.getElementById('hezetasuna').value;
    const tenperatura = document.getElementById('tenperatura').value;
    const ph = document.getElementById('ph').value;
    const cn = document.getElementById('cn').value;
    const denbora = document.getElementById('denbora').value;

    // Simple validation
    if (hezetasuna < 0 || hezetasuna > 100) {
        alert('Hezetasuna 0 eta 100 artean egon behar da.');
        return;
    }
    if (tenperatura < 0) {
        alert('Tenperatura 0°C baino handiagoa izan behar da.');
        return;
    }
    if (ph < 0 || ph > 14) {
        alert('pH 0 eta 14 artean egon behar da.');
        return;
    }
    if (cn <= 0) {
        alert('C/N erlazioa positiboa izan behar da.');
        return;
    }
    if (denbora <= 0) {
        alert('Denbora positiboa izan behar da.');
        return;
    }

    // Calculate composting result (dummy logic for demonstration)
    const emaitza = `Konpostaje prozesua ${denbora} egunetan burutuko da. Hezetasuna: ${hezetasuna}%, Tenperatura: ${tenperatura}°C, pH: ${ph}, C/N erlazioa: ${cn}.`;
    
    document.getElementById('emaitza').innerText = emaitza;
}