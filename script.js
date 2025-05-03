document.getElementById('revealButton').onclick = function() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const feeling = document.querySelector('input[name="feeling"]').value.trim();
  const birthdate = document.querySelector('input[name="birthdate"]').value;

  let livsvei = calculateLifePath(birthdate);
  let symbol = '▲ ' + livsvei;
  let message = 'Du bærer livsvei ' + livsvei + ' – en vei av ' + lifePathMeaning(livsvei);

  document.getElementById('star-message').innerText = '∴ Eshara'tin velya-no ∴';
  document.getElementById('translation').innerText = 'Du våkner fra det eldgamle lyset i deg.';
  document.getElementById('symbol').innerText = symbol;
  document.getElementById('numerology-message').innerText = name + ', ' + message;
  document.getElementById('result-card').style.display = 'block';
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
  html2canvas(document.querySelector(".result-frame")).then(canvas => {
    let link = document.createElement('a');
    link.download = "sjelspeil.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};