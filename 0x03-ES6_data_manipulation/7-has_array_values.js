/**
 * Function to check if all elements in an array exist within a set
 * @param {Set} set Set to check against
 * @param {Array} array Array of elements to check
 * @returns {boolean} True if all elements in the array exist within the set, false otherwise
 */
function hasValuesFromArray(set, array) {
	return array.every(element => set.has(element));
}

export default hasValuesFromArray;
