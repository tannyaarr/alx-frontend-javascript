/**
 * Function to create a map of groceries
 * @returns {Map} Map of groceries with name as key and quantity as value
 */
function groceriesList() {
	const groceries = new Map([
		['Apples', 10],
		['Tomatoes', 10],
		['Pasta', 1],
		['Rice', 1],
		['Banana', 5]
	]);

	return groceries;
}

export default groceriesList;
