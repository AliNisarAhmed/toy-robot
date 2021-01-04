import { Table, Position } from './types';

function validPosition(
	{ northBoundary, eastBoundary }: Table,
	{ north, east }: Position
): boolean {
	return (
		north >= 0 && north <= northBoundary && east >= 0 && east <= eastBoundary
	);
}

export { validPosition };
