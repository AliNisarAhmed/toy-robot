"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = exports.moveWest = exports.moveEast = exports.moveSouth = exports.moveNorth = void 0;
function move(robot) {
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
exports.move = move;
function moveNorth(robot) {
    return Object.assign(Object.assign({}, robot), { north: robot.north + 1 });
}
exports.moveNorth = moveNorth;
function moveSouth(robot) {
    return Object.assign(Object.assign({}, robot), { north: robot.north - 1 });
}
exports.moveSouth = moveSouth;
function moveEast(robot) {
    return Object.assign(Object.assign({}, robot), { east: robot.east + 1 });
}
exports.moveEast = moveEast;
function moveWest(robot) {
    return Object.assign(Object.assign({}, robot), { east: robot.east - 1 });
}
exports.moveWest = moveWest;
//# sourceMappingURL=index.js.map