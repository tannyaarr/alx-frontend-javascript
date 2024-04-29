/**
 * Function to clean a set by returning a string of values starting with a specific string
 * @param {Set} set Set to clean
 * @param {String} startString String to filter the set values
 * @returns {String} String containing values from the set that start with the specified string
 */
function cleanSet(set, startString) {
	const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
	const cleanedValues = filteredValues.map(value => value.substring(startString.length));

	return cleanedValues.join('-');
}

export default cleanSet;
