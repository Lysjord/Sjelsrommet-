document.getElementById('revealButton').onclick = function() {
  const feeling = document.querySelector('input[name="feeling"]').value.trim();
  const name = document.querySelector('input[name="name"]').value.trim();
  const birthdate = document.querySelector('input[name="birthdate"]').value.trim();
  const period = document.querySelector('select[name="period"]').value;
  document.getElementById('star-message').innerText = '∴ Sha’el tora minna ∴';
  document.getElementById('translation').innerText = 'Du åpner ditt indre lys.';
  document.getElementById('symbol').innerText = '▲ 7';
  document.getElementById('numerology-message').innerText = name + ', du er i en fase av dyp innsikt og vekst.';
  document.getElementById('result-card').style.display = 'block';
};
document.getElementById('downloadBtn').onclick = function() {
  html2canvas(document.querySelector("#result-card")).then(canvas => {
    let link = document.createElement('a');
    link.download = "sjelspeil.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};