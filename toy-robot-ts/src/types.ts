export interface Robot {
	north: number;
	east: number;
	facing: Direction;
}

export type Direction = 'North' | 'South' | 'East' | 'West';
