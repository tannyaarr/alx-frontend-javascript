const weakMap = new WeakMap();

/**
 * Function to query API endpoints and track the number of queries for each endpoint
 * @param {Object} endpoint Object representing the API endpoint with protocol and name
 * @throws {Error} If the number of queries for the endpoint is >= 5
 */
function queryAPI(endpoint) {
	if (!weakMap.has(endpoint)) {
		weakMap.set(endpoint, 1);
	} else {
		const count = weakMap.get(endpoint) + 1;
		weakMap.set(endpoint, count);

		if (count >= 5) {
			throw new Error(`Endpoint load is high: ${endpoint.protocol}://${endpoint.name}`);
		}
	}
}

export { weakMap, queryAPI };
