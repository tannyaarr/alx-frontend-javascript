/**
 * Function to update quantities of items in a map where initial quantity is 1
 * @param {Map} groceryMap Map of groceries with name as key and quantity as value
 * @returns {Map} Updated map with quantities updated to 100 for items with initial quantity at 1
 * @throws {Error} If the argument is not a map
 */
function updateUniqueItems(groceryMap) {
	if (!(groceryMap instanceof Map)) {
		throw new Error("Cannot process");
	}

	for (const [item, quantity] of groceryMap.entries()) {
		if (quantity === 1) {
			groceryMap.set(item, 100);
		}
	}

	return groceryMap;
}

export default updateUniqueItems;
