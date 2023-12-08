export function getFormData() {
    const totalCreditUnit = parseInt(document.getElementById('totalCreditUnit').value);
    const totalCredits = parseInt(document.getElementById('totalCredits').value);
    const gradesInput = document.getElementById('grades').value;

    const grades = gradesInput.split(',').map(grade => parseFloat(grade));

    const sumOfGrades = grades.reduce((acc, grade) => acc + grade, 0);

    return { totalCreditUnit, totalCredits, grades, sumOfGrades };
}

