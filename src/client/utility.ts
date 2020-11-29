export const EIGHTH_BOARD = 1 / 8;

export const BLACK_COLUMNS = new Set([0, 2, 4, 6]);

/**
 * Calculates the UDim2 position for a given location.
 * @param location The array index of the piece (must start from 0).
 */
export function getPiecePosition(location: number): UDim2 {
	const { row, column } = getPieceLocationData(location);

	const x = 1 - column / 8 - EIGHTH_BOARD;
	const y = row === 0 ? 1 - EIGHTH_BOARD : 1 - row / 8 - EIGHTH_BOARD;

	return UDim2.fromScale(x, y);
}

/**
 * Calculates the row and column of a given location.
 * @param location The array index of the piece (must start from 0).
 */
export function getPieceLocationData(location: number): { row: number; column: number } {
	const row = math.floor(location / 8);
	const column = location % 8;

	return {
		row: row,
		column: column,
	};
}
