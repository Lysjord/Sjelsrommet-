document.getElementById('revealButton').onclick = function() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const feeling = document.querySelector('input[name="feeling"]').value.trim();
  const birthdate = document.querySelector('input[name="birthdate"]').value;
  const period = document.querySelector('select[name="period"]').value;

  document.getElementById('star-message').innerText = '∴ Eshara'tin velya-no ∴';
  document.getElementById('translation').innerText = 'Du våkner fra det eldgamle lyset i deg.';
  document.getElementById('symbol').innerText = '△ 9';
  document.getElementById('numerology-message').innerText = name + ', du bærer livsvei 9 – et tegn på avslutning, visdom og dyp sjelstjeneste.';
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