function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const checkmark = document.querySelector(".checkmark");
    checkmark.style.display = "flex";

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    const bmi = bmiCalculator(weight, height);
    displayBMIResult(bmi);
}

function bmiCalculator(weight, height) {
    const bmi = weight / ((height * height) / 10000);
    return Math.round(bmi * 10) / 10;
}

function displayBMIResult(bmi) {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";

    let interpretation = "";
    if (bmi < 18.5) {
        interpretation = `You are <b>underweight</b>.`;
    } else if (bmi < 24.9) {
        interpretation = `You are <b>normal</b> weight.`;
    } else if (bmi < 29.9) {
        interpretation = `You are <b>overweight</b>.`;
    } else {
        interpretation = `You are <b>obese</b>.`;
    }

    resultElement.innerHTML = `BMI: <b>${bmi}</b><br>${interpretation}`;
}

document.getElementById("submit").addEventListener("click", calculateBMI);
