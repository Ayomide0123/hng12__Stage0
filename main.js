// Current Time in UTC Format
function currentTimeUTC() {
  const currentTime = new Date();
  const utcTimeString = currentTime.toUTCString();
  const utcTime = document.querySelector('[data-testid="currentTimeUTC"]');
  utcTime.textContent = utcTimeString;
}

setInterval(currentTimeUTC, 1000);
