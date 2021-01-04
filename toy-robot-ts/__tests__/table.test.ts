import { validPosition } from '../src/table';
import { Position, Table } from '../src/types';

describe('Test validPosition function', () => {
	test('returns true for a valid position', () => {
		let pos: Position = { east: 3, north: 3};
		let table: Table = { eastBoundary: 4, northBoundary: 4}

		let result = validPosition(table, pos);

		expect(result).toBeTruthy();
	})

	test('returns false for an invalid position', () => {
		let pos: Position = { east: 5, north: 5};
		let table: Table = { eastBoundary: 4, northBoundary: 4}

		let result = validPosition(table, pos);

		expect(result).toBeFalsy();
	})
})