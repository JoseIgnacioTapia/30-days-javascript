const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log(seconds);
  const secondDegrees = (seconds / 60) * 360 + 90;
  console.log(secondDegrees);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  console.log(minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  console.log(hours);
  const hoursDegrees = (hours / 24) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
