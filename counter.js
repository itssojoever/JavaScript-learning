const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");
const counter = document.getElementById("counter");
let count = 0;

function decreaseCount() {
    count--;
    counter.textContent = count;
}


function resetCount() {
    count = 0;
    counter.textContent = count;
}

function increaseCount() {
    count++;
    counter.textContent = count;
}



decreaseButton.onclick = decreaseCount;
resetButton.onclick = resetCount;
increaseButton.onclick = increaseCount;

