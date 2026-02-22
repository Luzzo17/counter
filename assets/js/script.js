const counter = document.createElement("div");
counter.classList.add("counter");
document.body.appendChild(counter);

const title = document.createElement("h1");
title.textContent = "Sushi Counter!";
counter.appendChild(title);

const display = document.createElement("h2");
display.id = "display";
display.textContent = "0";
counter.appendChild(display);

const savedValue = localStorage.getItem("sushiCount");

if(savedValue !== null) {
    display.textContent = savedValue;
}

const bigIcon = document.createElement("img");
bigIcon.src = "./assets/images/soysauce.png";
bigIcon.alt = "Big Icon";
bigIcon.classList.add("icon-big");
counter.appendChild(bigIcon);

const plusDiv = document.createElement("div");
plusDiv.classList.add("buttons");
counter.appendChild(plusDiv);

function updateCounter(amount) {
    const currentValue = parseInt(display.textContent);
    const newValue = Math.max(0, currentValue + amount);
    display.textContent = newValue;
    localStorage.setItem("sushiCount", newValue);
}

const plusOneButton = document.createElement("button");
plusOneButton.textContent = "+1";
plusDiv.appendChild(plusOneButton);

plusOneButton.addEventListener("click", () => {
  updateCounter(1)
  bigIcon.src = "./assets/images/nigiri.png";
    bigIcon.classList.remove("minusImg");
});

const plusTwoButton = document.createElement("button");
plusTwoButton.textContent = "+2";
plusDiv.appendChild(plusTwoButton);

plusTwoButton.addEventListener("click", () => {
    updateCounter(2)
    bigIcon.src = "./assets/images/gunkan.png";
    bigIcon.classList.remove("minusImg");
});

const plusThreeButton = document.createElement("button");
plusThreeButton.textContent = "+3";
plusDiv.appendChild(plusThreeButton);

plusThreeButton.addEventListener("click", () => {
    updateCounter(3)
    bigIcon.src = "./assets/images/gyoza.png";
    bigIcon.classList.remove("minusImg");
});

const plusFourButton = document.createElement("button");
plusFourButton.textContent = "+4";
plusDiv.appendChild(plusFourButton);

plusFourButton.addEventListener("click", () => {
    updateCounter(4)
    bigIcon.src = "./assets/images/sushi4.png";
    bigIcon.classList.remove("minusImg");
});

const plusEightButton = document.createElement("button");
plusEightButton.textContent = "+8";
plusDiv.appendChild(plusEightButton);

plusEightButton.addEventListener("click", () => {
    updateCounter(8)
    bigIcon.src = "./assets/images/sushi8.png";
    bigIcon.classList.remove("minusImg");
});

const minusDiv = document.createElement("div");
minusDiv.classList.add("buttons");
counter.appendChild(minusDiv);

const minusOneButton = document.createElement("button");
minusOneButton.textContent = "-1";
minusDiv.appendChild(minusOneButton);

minusOneButton.addEventListener("click", () => {
  updateCounter(-1)
  bigIcon.src = "./assets/images/nigiri.png";
  bigIcon.classList.add("minusImg");
});

const minusTwoButton = document.createElement("button");
minusTwoButton.textContent = "-2";
minusDiv.appendChild(minusTwoButton);

minusTwoButton.addEventListener("click", () => {
    updateCounter(-2)
    bigIcon.src = "./assets/images/gunkan.png";
    bigIcon.classList.add("minusImg");
});

const minusThreeButton = document.createElement("button");
minusThreeButton.textContent = "-3";
minusDiv.appendChild(minusThreeButton);

minusThreeButton.addEventListener("click", () => {
    updateCounter(-3)
    bigIcon.src = "./assets/images/gyoza.png";
    bigIcon.classList.add("minusImg");
});

const minusFourButton = document.createElement("button");
minusFourButton.textContent = "-4";
minusDiv.appendChild(minusFourButton);

minusFourButton.addEventListener("click", () => {
    updateCounter(-4)
    bigIcon.src = "./assets/images/sushi4.png";
    bigIcon.classList.add("minusImg");
});

const minusEightButton = document.createElement("button");
minusEightButton.textContent = "-8";
minusDiv.appendChild(minusEightButton);

minusEightButton.addEventListener("click", () => {
    updateCounter(-8)
    bigIcon.src = "./assets/images/sushi8.png";
    bigIcon.classList.add("minusImg");
});

const resetDiv = document.createElement("div");
resetDiv.classList.add("buttons");
counter.appendChild(resetDiv);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Counter";
resetDiv.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    display.textContent = "0";
    bigIcon.src = "./assets/images/soysauce.png";
    bigIcon.classList.remove("minusImg");
    localStorage.setItem("sushiCount", 0);
})

const imgReset  = document.createElement("img");
imgReset.src = "./assets/images/soysauce.png";
imgReset.alt = "Soy Sauce Icon";
resetButton.appendChild(imgReset)

const imgNigiriPlus = document.createElement("img");
imgNigiriPlus.src = "./assets/images/nigiri.png";
imgNigiriPlus.alt = "Nigiri Icon";
plusOneButton.appendChild(imgNigiriPlus)

const imgNigiriMinus = document.createElement("img");
imgNigiriMinus.src = "./assets/images/nigiri.png";
imgNigiriMinus.alt = "Nigiri Icon";
imgNigiriMinus.classList.add("minusImg")
minusOneButton.appendChild(imgNigiriMinus)

const imgGunkanPlus = document.createElement("img");
imgGunkanPlus.src = "./assets/images/gunkan.png";
imgGunkanPlus.alt = "Gunkan Icon";
plusTwoButton.appendChild(imgGunkanPlus)

const imgGunkanMinus = document.createElement("img");
imgGunkanMinus.src = "./assets/images/gunkan.png";
imgGunkanMinus.alt = "Gunkan Icon";
imgGunkanMinus.classList.add("minusImg")
minusTwoButton.appendChild(imgGunkanMinus)

const imgGyozaPlus = document.createElement("img");
imgGyozaPlus.src = "./assets/images/gyoza.png";
imgGyozaPlus.alt = "Gyoza Icon";
plusThreeButton.appendChild(imgGyozaPlus)

const imgGyozaMinus = document.createElement("img");
imgGyozaMinus.src = "./assets/images/gyoza.png";
imgGyozaMinus.alt = "Gyoza Icon";
imgGyozaMinus.classList.add("minusImg")
minusThreeButton.appendChild(imgGyozaMinus)

const imgSushi4Plus = document.createElement("img");
imgSushi4Plus.src = "./assets/images/sushi4.png";
imgSushi4Plus.alt = "Sushi 4 Icon";
plusFourButton.appendChild(imgSushi4Plus)

const imgSushi4Minus = document.createElement("img");
imgSushi4Minus.src = "./assets/images/sushi4.png";
imgSushi4Minus.alt = "Sushi 4 Icon";
imgSushi4Minus.classList.add("minusImg")
minusFourButton.appendChild(imgSushi4Minus)

const imgSushi8Plus = document.createElement("img");
imgSushi8Plus.src = "./assets/images/sushi8.png";
imgSushi8Plus.alt = "Sushi 8 Icon";
plusEightButton.appendChild(imgSushi8Plus)

const imgSushi8Minus = document.createElement("img");
imgSushi8Minus.src = "./assets/images/sushi8.png";
imgSushi8Minus.alt = "Sushi 8 Icon";
imgSushi8Minus.classList.add("minusImg")
minusEightButton.appendChild(imgSushi8Minus)



const footer = document.createElement("footer");
footer.innerHTML = '<a href="https://www.flaticon.com/free-icons/sushi" title="sushi icons" target="_blank">Sushi icons created by amonrat rungreangfangsai - Flaticon</a>';
document.body.appendChild(footer);

