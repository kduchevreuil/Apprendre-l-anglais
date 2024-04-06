let AllLink = document.querySelectorAll("a");
let AllParagraf = document.querySelectorAll("p");
let AllButtons = document.querySelectorAll("button");
let AllIMG = document.querySelectorAll("img");
let randomNumber = [-0.7, 0.7, 0.5, -0.5, 0, 0.4, -0.4, 0.3, -0.3, 0.8, 0.8];

let maFunctionRandom = function () {
  testRandom = randomNumber[Math.floor(Math.random() * randomNumber.length)];
  return testRandom;
};

AllButtons.forEach(() => {
  for (let i = 0; i < AllButtons.length; i++) {
    AllButtons[i].style.transform = `rotate(${maFunctionRandom()}deg)`;
  }
});

AllLink.forEach(() => {
  for (let i = 0; i < AllLink.length; i++) {
    AllLink[i].style.transform = `rotate(${maFunctionRandom()}deg)`;
  }
});

AllParagraf.forEach(() => {
  for (let i = 0; i < AllParagraf.length; i++) {
    AllParagraf[i].style.transform = `rotate(${maFunctionRandom()}deg)`;
  }
});

AllIMG.forEach(() => {
  for (let i = 0; i < AllIMG.length; i++) {
    AllIMG[i].style.transform = `rotate(${maFunctionRandom()}deg)`;
  }
});
