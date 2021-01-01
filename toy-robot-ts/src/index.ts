import { Robot, Direction } from './types';

function move(robot: Robot): Robot {
	switch (robot.facing) {
		case 'North':
			return moveNorth(robot);
		case 'South':
			return moveSouth(robot);
		case 'East':
			return moveEast(robot);
		case 'West':
			return moveWest(robot);
		default:
			throw new Error('Invalid Direction');
	}
}

const defaultRobot: Robot = {
	east: 0,
	north: 0,
	facing: 'North',
};

function moveNorth(robot: Robot): Robot {
	return { ...robot, north: robot.north + 1 };
}

function moveSouth(robot: Robot): Robot {
	return { ...robot, north: robot.north - 1 };
}

function moveEast(robot: Robot): Robot {
	return { ...robot, east: robot.east + 1 };
}

function moveWest(robot: Robot): Robot {
	return { ...robot, east: robot.east - 1 };
}

function turnLeft(robot: Robot): Robot {
	return { ...robot, facing: rotateLeft(robot.facing) };
}

function turnRight(robot: Robot): Robot {
	return { ...robot, facing: rotateRight(robot.facing) };
}

function rotateRight(direction: Direction): Direction {
	switch (direction) {
		case 'North':
			return 'East';
		case 'East':
			return 'South';
		case 'South':
			return 'West';
		case 'West':
			return 'North';
	}
}

function rotateLeft(direction: Direction): Direction {
	switch (direction) {
		case 'North':
			return 'West';
		case 'West':
			return 'South';
		case 'South':
			return 'East';
		case 'East':
			return 'North';
	}
}

function inspectRobot(robot: Robot): Robot {
	console.log(JSON.stringify(robot, null, 2));
	return robot;
}

inspectRobot(move(inspectRobot(turnLeft(move(turnRight(move(defaultRobot)))))));

export {
	moveNorth,
	moveSouth,
	moveEast,
	moveWest,
	move,
	turnLeft,
	turnRight,
	defaultRobot,
	inspectRobot,
};
