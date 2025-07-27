const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let interval;

let time = {
    s0: 0,
    s1: 0,
    m0: 0,
    m1: 0,
    h0: 0,
    h1: 0,
};

function updateDisplay(h0, h1, m0, m1, s0, s1) {
    hour.textContent = `${h0}${h1}`;
    minute.textContent = `${m0}${m1}`;
    second.textContent = `${s0}${s1}`;
}

function timeUp() {
    interval = setInterval(() => {
        time.s1++;
        if (time.s1 == 5 && time.s1 > 9) {
            time.m1++;
            time.s0 = 0;
            time.s1 = 0;
        }
        if (time.s1 > 9) {
            time.s0++;
            time.s1 = 0;
        }
        updateDisplay(time.h0, time.h1, time.m0, time.m1, time.s0, time.s1);
    }, 1000);
}

startBtn.addEventListener("click", () => {
    timeUp();
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    time = {
        s0: 0,
        s1: 0,
        m0: 0,
        m1: 0,
        h0: 0,
        h1: 0,
    };
    updateDisplay(time.h0, time.h1, time.m0, time.m1, time.s0, time.s1);
});
