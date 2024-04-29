/**
 * Function to calculate the sum of student ids
 * @param {Array} studentList Array of student objects
 * @returns {Number} Sum of student ids
 */
function getStudentIdsSum(studentList) {
	if (!Array.isArray(studentList)) {
		return 0;
	}

	return studentList.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
