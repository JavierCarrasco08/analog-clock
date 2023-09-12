import "./style/main.scss";
const bar_second: HTMLElement = document.querySelector(".clock__second")!;
const bar__min: HTMLElement = document.querySelector(".clock__min")!;
const bar__hour: HTMLElement = document.querySelector(".clock__hour")!;

function setSeconds(second: number): number {
  let result = second * 6;
  return result;
}
function setMinutes(minute: number): number {
  let result = minute * 6;
  return result;
}
function setHours(minute: number, hour: number): number {
  let stepOne: number = Math.floor(minute * 0.5);
  let stepTwo: number = hour >= 12 ? hour - 12 : hour;
  let result: number = stepTwo * 30 + stepOne;
  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let date: Date = new Date();
    // ! Seconds
    let second: number = setSeconds(date.getSeconds());
    bar_second.style.transform = `rotate(${second}deg)`;

    // ! Minutes
    let minute: number = setMinutes(date.getMinutes());
    bar__min.style.transform = `rotate(${minute}deg)`;

    // ! Hours
    let hour = setHours(date.getMinutes(), date.getHours());
    bar__hour.style.transform = `rotate(${hour}deg)`;
  }, 100);
});
