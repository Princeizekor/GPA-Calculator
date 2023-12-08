export function calculateGPA(grades) {
    const totalCreditUnit = grades.length;

    let totalGradePoints = 0;

    for (let i = 0; i < totalCreditUnit; i++) {
        totalGradePoints += grades[i];
    }

    const gpa = totalGradePoints / totalCreditUnit;
    return gpa.toFixed(2);
}
