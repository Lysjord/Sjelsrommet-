document.getElementById('revealButton').onclick = function() {
  let name = document.getElementById('name').value.trim() || "Stjernelys";
  let feeling = document.getElementById('feeling').value.trim() || "Stillhet og lys";
  let birthdate = document.getElementById('birthdate').value.trim() || "1990-01-01";

  let livsvei = calculateLifePath(birthdate);
  let symbol = '▲ ' + livsvei;
  let message = 'Du bærer livsvei ' + livsvei + ' – en vei av ' + lifePathMeaning(livsvei);

  document.getElementById('star-message').innerText = '∴ Eshara'tin velya-no ∴';
  document.getElementById('translation').innerText = 'You are awakening from the ancient light within.';
  document.getElementById('symbol').innerText = symbol;
  document.getElementById('numerology-message').innerText = name + ', ' + message;
  document.getElementById('result-container').style.display = 'block';
};

function calculateLifePath(dateStr) {
  const nums = dateStr.replaceAll('-', '').split('').map(n => parseInt(n));
  let total = nums.reduce((a, b) => a + b, 0);
  while (total > 9 && ![11, 22, 33].includes(total)) {
    total = total.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return total;
}

function lifePathMeaning(n) {
  const meanings = {
    1: "selvstendighet og lederskap",
    2: "følsomhet og balanse",
    3: "kreativitet og uttrykk",
    4: "struktur og stabilitet",
    5: "forandring og frihet",
    6: "omsorg og harmoni",
    7: "intuisjon og visdom",
    8: "kraft og gjennomføring",
    9: "visdom og tjeneste",
    11: "åndelig innsikt",
    22: "mesterbyggerens kraft",
    33: "ubetinget kjærlighet"
  };
  return meanings[n] || "en unik vei";
}

document.getElementById('downloadBtn').onclick = function() {
  html2canvas(document.querySelector("#soul-image")).then(canvas => {
    let link = document.createElement('a');
    link.download = "sjelspeil.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};