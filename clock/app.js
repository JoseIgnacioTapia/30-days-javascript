const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

secondsBase = 0;
minutesBase = 0;
hoursBase = 0;

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90 + secondsBase;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  if (seconds == 59) secondsBase += 360;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90 + minutesBase;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  if (minutes == 59) minutesBase += 360;

  const hours = now.getHours();
  const hoursDegrees = (hours / 24) * 360 + 90 + hoursBase;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (hours == 11) hoursBase += 360;
}

setInterval(setDate, 1000);
