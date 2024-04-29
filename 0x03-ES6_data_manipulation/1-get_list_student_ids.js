/**
 * Function to get list of student ids
 * @param {Array} studentList Array of student objects
 * @returns {Array} Array of student ids
 */
function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map(student => student.id);
}

export default getListStudentIds;
