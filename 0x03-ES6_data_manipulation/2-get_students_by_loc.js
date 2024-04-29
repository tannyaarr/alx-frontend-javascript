/**
 * Function to filter students by location
 * @param {Array} studentList Array of student objects
 * @param {String} city City name to filter students by
 * @returns {Array} Array of student objects in the specified city
 */
function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.filter(student => student.location === city);

}

export default getStudentsByLocation;
