import fs from 'fs';
import { Robot } from './types';

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
			throw new Error("Invalid Direction");
	}
}

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

export { moveNorth, moveSouth, moveEast, moveWest, move };
