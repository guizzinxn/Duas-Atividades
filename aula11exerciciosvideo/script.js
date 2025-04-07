const form = document.getElementById("imc-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calcBtn = document.getElementById("calc-btn");
const clearBtn = document.getElementById("clear-btn");
const resultContainer = document.getElementById("result-container");
const calcContainer = document.getElementById("calc-container");
const backBtn = document.getElementById("back-btn");

const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");

const imcTable = [
  { min: 0, max: 18.4, classification: "Magreza", obesity: "0" },
  { min: 18.5, max: 24.9, classification: "Normal", obesity: "0" },
  { min: 25, max: 29.9, classification: "Sobrepeso", obesity: "I" },
  { min: 30, max: 39.9, classification: "Obesidade", obesity: "II" },
  { min: 40, max: 99, classification: "Obesidade grave", obesity: "III" },
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(heightInput.value.replace(",", "."));
  const weight = parseFloat(weightInput.value.replace(",", "."));

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Preencha altura e peso corretamente!");
    return;
  }

  const imc = (weight / (height * height)).toFixed(1);

  imcNumber.textContent = imc;

  for (let item of imcTable) {
    if (imc >= item.min && imc <= item.max) {
      imcInfo.textContent = item.classification;
      break;
    }
  }

  calcContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
});

clearBtn.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
});

backBtn.addEventListener("click", () => {
  calcContainer.classList.remove("hide");
  resultContainer.classList.add("hide");
});
