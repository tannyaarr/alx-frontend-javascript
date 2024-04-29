/**
 * Function to create Int8 typed array with a value at a specific position
 * @param {Number} length Length of the typed array
 * @param {Number} position Position where the value should be added
 * @param {Number} value Value to be added at the specified position
 * @returns {ArrayBuffer} New ArrayBuffer with Int8 value at specific position
 * @throws {Error} If position is outside the range of the typed array
 */
function createInt8TypedArray(length, position, value) {
	if (position < 0 || position >= length) {
		throw new Error("Position outside range");
	}

	const buffer = new ArrayBuffer(length);
	const dataView = new DataView(buffer);

	dataView.setInt8(position, value);

	return dataView;
}

export default createInt8TypedArray;
