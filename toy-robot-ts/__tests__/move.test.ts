import {
	move,
	moveEast,
	moveNorth,
	moveSouth,
	moveWest,
	turnLeft,
	turnRight,
} from '../src/index';
import { Robot } from '../src/types';
import {pipe } from 'ramda';

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

describe('When the robot is facing North', () => {
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

	test('Robot can turn left to face West', () => {
		let result = turnLeft(robot);
		expect(result.facing).toBe('West');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
	});

	test('Robot can turn right to face East', () => {
		let result = turnRight(robot);
		expect(result.facing).toBe('East');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
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

	test('Robot can turn left to face East', () => {
		let result = turnLeft(robot);
		expect(result.facing).toBe('East');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
	});

	test('Robot can turn right to face West', () => {
		let result = turnRight(robot);
		expect(result.facing).toBe('West');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
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

	test('Robot can turn left to face North', () => {
		let result = turnLeft(robot);
		expect(result.facing).toBe('North');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
	});

	test('Robot can turn right to face South', () => {
		let result = turnRight(robot);
		expect(result.facing).toBe('South');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
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

	test('Robot can turn left to face South', () => {
		let result = turnLeft(robot);
		expect(result.facing).toBe('South');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
	});

	test('Robot can turn right to face North', () => {
		let result = turnRight(robot);
		expect(result.facing).toBe('North');
		expect(result.north).toBe(robot.north);
		expect(result.east).toBe(robot.east);
	});
});

describe('Test multiple movements and direction changes simultaneously', () => {
	let robot: Robot;

	beforeEach(() => {
		robot = {east: 0, north: 0, facing: 'North'};
	});

	test('Robot moves and changes direction multiple times and ends up in the correct position', () => {
		let movement = pipe(move, turnRight, move, turnLeft, move, turnLeft, move);
		let result = movement(robot);

		expect(result.north).toBe(2);
		expect(result.east).toBe(0);
		expect(result.facing).toBe('West');
	})
})
