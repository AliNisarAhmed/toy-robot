import { move, moveEast, moveNorth, moveSouth, moveWest } from '../src/index';
import { Robot } from '../src/types';

describe("Test Robot's movement", () => {
	let robot: Robot;

	beforeEach(() => {
		robot = { north: 0, east: 0, facing: 'North' };
	});

	test('should move the robot 1 unit north', () => {
		let result = moveNorth(robot);

		expect(result.north).toBe(robot.north + 1);
	});

	test('should move the robot 1 unit east', () => {
		let result = moveEast(robot);

		expect(result.east).toBe(robot.east + 1);
	});

	test('should move the robot 1 unit west', () => {
		let result = moveWest(robot);

		expect(result.east).toBe(robot.east - 1);
	});

	test('should move the robot 1 unit south', () => {
		let result = moveSouth(robot);

		expect(result.north).toBe(robot.north - 1);
	});
});

describe('When the robot is facing north', () => {
	let robot: Robot;

	beforeEach(() => {
		robot = { north: 0, east: 0, facing: 'North' };
	});

	test('Robot only moves north 1 unit when asked to move', () => {
		let result = move(robot);
		expect(result.north).toBe(robot.north + 1);
		expect(result.east).toBe(robot.east);
		expect(result.facing).toBe(robot.facing);
	});
});

describe('When the robot is facing South', () => {
	let robot: Robot;

	beforeEach(() => {
		robot = { north: 0, east: 0, facing: 'South' };
	});

	test('Robot only moves south 1 unit when asked to move', () => {
		let result = move(robot);
		expect(result.north).toBe(robot.north - 1);
		expect(result.east).toBe(robot.east);
		expect(result.facing).toBe(robot.facing);
	});
});

describe('When the robot is facing East', () => {
	let robot: Robot;

	beforeEach(() => {
		robot = { north: 0, east: 0, facing: 'East' };
	});

	test('Robot only moves east 1 unit when asked to move', () => {
		let result = move(robot);
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east + 1);
		expect(result.facing).toBe(robot.facing);
	});
});

describe('When the robot is facing West', () => {
	let robot: Robot;

	beforeEach(() => {
		robot = { north: 0, east: 0, facing: 'West' };
	});

	test('Robot only moves west 1 unit when asked to move', () => {
		let result = move(robot);
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east - 1);
		expect(result.facing).toBe(robot.facing);
	});
});
