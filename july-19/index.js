let user;
let admin;
user = {
    firstName: "Ankush",
    id: 123545678,
    lastLogin: new Date()
};
admin = {
    firstName: "Ankush",
    id: 2365489,
    lastLogin: new Date(),
    type: "admin"
};
let user1;
let accounts;
user1 = {
    firstName: "Ankush",
    id: 123545678,
    lastLogin: new Date(),
    age: 40
};
accounts = {
    firstName: "Ankush",
    id: 2365489,
    lastLogin: new Date(),
    type: "Accounts",
    age: 40
};
/// tuples
let abc = ['abc', 123, true];
let abc1 = ['abc', 123];
console.log(abc[0].toLowerCase());
console.log(abc[1].toFixed(2));
console.log(abc[2].valueOf());
console.log(abc1[1].valueOf());
//Enum
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["left"] = 3] = "left";
    direction[direction["right"] = 4] = "right";
})(direction || (direction = {}));
var Server_Response_Status;
(function (Server_Response_Status) {
    Server_Response_Status[Server_Response_Status["OK"] = 200] = "OK";
    Server_Response_Status[Server_Response_Status["NOT_FOUND"] = 404] = "NOT_FOUND";
})(Server_Response_Status || (Server_Response_Status = {}));
console.log(Server_Response_Status.OK);
console.log(Server_Response_Status.NOT_FOUND);
var EventHandlers;
(function (EventHandlers) {
    EventHandlers["ON_CLICK"] = "click";
    EventHandlers["ON_TAP"] = "tap";
})(EventHandlers || (EventHandlers = {}));
console.log(EventHandlers.ON_CLICK);
// functions
function sum(x, y) {
    return x + y;
}
function padZero(x, padding) {
    let len = x.toString().length;
    return ('0').repeat(padding - len) + x;
}
console.log(padZero(5, 3));
function something(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    else {
        return x;
    }
}
function isSquare(s) {
    return 'side' in s;
}
// input 0|1|2|3|4|5|6| || a|b|c|d|e|f|g|h
function valueToArray(value) {
    const split = value.split("|");
    if (isNaN(Number(split[0]))) {
        return split;
    }
    else {
        return split.map(Number);
    }
}
let a = valueToArray('a|b|c|d|e|f|g|h');
console.log(a);
console.log(valueToArray('0|1|2|3|4|5|6'));
