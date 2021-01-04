export interface Robot {
	north: number;
	east: number;
	facing: Direction;
}

export interface Table {
	eastBoundary: number;
	northBoundary: number;
}

export interface Position {
	north: number;
	east: number;
}

export interface Simulation {
	table: Table;
	robot: Robot;
}

export type Direction = 'North' | 'South' | 'East' | 'West';

export type Rotation = 'Left' | 'Right';