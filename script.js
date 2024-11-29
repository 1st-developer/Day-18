let timer;
let isRunning = false;
let totalTime = 25 * 60;

const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const bgOne = document.getElementById("bg-one");
const bgTwo = document.getElementById("bg-two");
const bgThree = document.getElementById("bg-three");

bgOne.addEventListener('click', () => {
    document.body.style.backgroundColor = "#c84747";
    bgOne.classList.add('pomodoro');
    bgThree.classList.remove('me');
});
bgTwo.addEventListener('click', () => {
    document.body.style.backgroundColor = "#1c9094";
    bgTwo.classList.add('show');
    bgOne.classList.remove('pomodoro');
});
bgThree.addEventListener('click', () => {
    document.body.style.backgroundColor = "#1c6494";
    bgThree.classList.add('me');
    bgTwo.classList.remove('show');
});

function updateDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");
}


startButton.addEventListener("click", () => {
  if (isRunning) return;

  isRunning = true;
  timer = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("Whakhtigii wuu dhamaaday nasasho qaado");
      isRunning = false;
    }
  }, 1000);
});


pauseButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});


resetButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  totalTime = 25 * 60;
  updateDisplay();
});

updateDisplay();