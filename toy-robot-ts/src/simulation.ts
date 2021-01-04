import { move, turnLeft, turnRight } from './movement';
import { validPosition } from './table';
import { Robot, Rotation, Simulation, Table } from './types';

function place(table: Table, robot: Robot): Simulation {
	if (validPosition(table, robot)) {
		return { table, robot };
	}

	throw new Error('Invalid Robot coordinates');
}

function moveRobot({ table, robot }: Simulation): Simulation {
	let newRobot = move(robot);
	if (validPosition(table, newRobot)) {
		return { table, robot: newRobot };
	}

	throw new Error('At table boundary');
}

function turnRobot({ table, robot }: Simulation, rot: Rotation): Simulation {
	switch (rot) {
		case 'Left':
			return { table, robot: turnLeft(robot) };
		case 'Right':
			return { table, robot: turnRight(robot) };
	}
}

export { place, moveRobot, turnRobot };
