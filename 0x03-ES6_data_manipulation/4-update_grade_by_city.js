/**
 * Function to update student grades by city
 * @param {Array} studentList Array of student objects
 * @param {String} city City name to filter students by
 * @param {Array} newGrades Array of new grades for students in the specified city
 * @returns {Array} Array of updated student objects with grades
 */
function updateStudentGradeByCity(studentList, city, newGrades) {
	if (!Array.isArray(studentList)) {
		return [];
	}

	const studentsInCity = studentList.filter(student => student.location === city);

	const updatedStudents = studentsInCity.map(student => {
		const gradeObj = newGrades.find(grade => grade.studentId === student.id);
		const grade = gradeObj ? gradeObj.grade : 'N/A';
		return { ...student, grade };
	});

	return updatedStudents;
}

export default updateStudentGradeByCity;
