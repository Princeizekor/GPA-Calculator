export function getFormData() {
    const numCourses = parseInt(document.getElementById('numCourses').value);
    const totalCredits = parseInt(document.getElementById('totalCredits').value);
    const gradesInput = document.getElementById('grades').value;

    const grades = gradesInput.split(',').map(grade => parseFloat(grade));

    return { numCourses, totalCredits, grades };
}
