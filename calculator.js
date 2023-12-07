export function calculateGPA(grades) {
    const numCourses = grades.length;

    let totalGradePoints = 0;

    for (let i = 0; i < numCourses; i++) {
        totalGradePoints += grades[i];
    }

    const gpa = totalGradePoints / numCourses;
    return gpa.toFixed(2);
}
