import { moveRobot } from '../src/simulation';
import { Robot, Simulation, Table } from '../src/types';

describe('A robot placed on a table can be moved within bounds', () => {
	let table: Table = { northBoundary: 4, eastBoundary: 4 };

	test('Moves a robot one place if not at the edge', () => {
		let robot: Robot = { north: 2, east: 2, facing: 'North' };
		let sim: Simulation = {
			table,
			robot,
		};

		let result = moveRobot(sim);

		expect(result.robot.north).toBe(robot.north + 1);
		expect(result.robot.east).toBe(robot.east);
		expect(result.robot.facing).toBe(robot.facing);
	});

	test('Throws if the robot at the edge attempts to move', () => {
		let robot: Robot = {north: 4, east: 2, facing: 'North'};
		let sim: Simulation = {
			table, robot
		};

		expect(moveRobot(sim)).toThrow();
	})
});
