import { getFormData } from './form.js';
import { calculateGPA } from './calculator.js';

// function updateResult(gpa) {
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = `<p>Your GPA is: ${gpa}</p>`;
// }
function updateResult(gpa, sumOfGrades) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your GPA is: ${gpa}</p>`;
    // resultDiv.innerHTML += `<p>Sum of Grades: ${sumOfGrades}</p>`;
}

function calculateGPAAndDisplay() {
    const { grades } = getFormData();
    const gpa = calculateGPA(grades);
    updateResult(gpa);
}

document.getElementById('calculateButton').addEventListener('click', calculateGPAAndDisplay);
