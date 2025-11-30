function konfirmatu() {
  const hez = parseFloat(document.getElementById('hezetasuna').value);
  const tenp = parseFloat(document.getElementById('tenperatura').value);
  const ph = parseFloat(document.getElementById('ph').value);
  const cn = parseFloat(document.getElementById('cn').value);
  const denbora = parseFloat(document.getElementById('denbora').value);

  const emaitzaDiv = document.getElementById('emaitza');

  if (hez>=40 && hez<=60 && tenp>=50 && tenp<=65 && ph>=6 && ph<=8 && cn>=25 && cn<=35 && denbora>=60 && denbora<=180) {
    emaitzaDiv.innerHTML = `
      <h2>✅ Zorionak! Konpostaje arrakastatsua</h2>
      <img src='konpostagailua.png' alt='Konpostagailua' style='width:200px;'>
      <img src='check.png' alt='✔' style='width:100px;'>
    `;
  } else {
    emaitzaDiv.innerHTML = `<h2>⚠️ Parametroak berrikusi</h2>`;
  }

  document.getElementById('compostForm').querySelectorAll('input').forEach(input => input.disabled = true);
}
