/*
    data type:
       let x: number,
       let str: string,
       let isTrue: boolean,
       let isNull: null
       undefined
       let a:any - default
        never
        unknown

        Array:
        number[], Array<number> // second is not recommended because of react and tsx.
        string[], Array<string>
        boolean[], Array<boolean>
 */
// custom types....
type User = {
    firstName: string;
    lastName?: string;
    id: number;
    lastLogin: Date;
}

type Employee = User & {
    type: string
}

let user: User;
let admin: Employee;
user = {
    firstName: "Ankush",
    id: 123545678,
    lastLogin : new Date()
}

admin = {
    firstName: "Ankush",
    id:2365489,
    lastLogin: new Date(),
    type:"admin"
}

/// interfaces
interface IUser {
    firstName: string;
    lastName?: string;
    id: number;
    lastLogin: Date;
}

interface IEmployee extends IUser{
    type: string
}
// in some sub class
interface IUser{
    age: number
}

let user1: IUser;
let accounts: IEmployee;
user1 = {
    firstName: "Ankush",
    id: 123545678,
    lastLogin : new Date(),
    age: 40
}

accounts = {
    firstName: "Ankush",
    id:2365489,
    lastLogin: new Date(),
    type:"Accounts",
    age: 40
}

/// tuples
let abc:[string, number, boolean] = ['abc', 123, true];
let abc1:[string, number] = ['abc', 123];

console.log(abc[0].toLowerCase());
console.log(abc[1].toFixed(2));
console.log(abc[2].valueOf());
console.log(abc1[1].valueOf());

//Enum
enum direction {
    'up' = 1,
    'down',
    'left',
    'right'
}

enum Server_Response_Status {
    OK = 200,
    NOT_FOUND = 404
}

console.log(Server_Response_Status.OK);
console.log(Server_Response_Status.NOT_FOUND);

enum EventHandlers {
    ON_CLICK='click',
    ON_TAP = 'tap'
}

console.log(EventHandlers.ON_CLICK);

// functions
function sum (x:number, y: number): number{
    return x+y;
}
function padZero(x: number, padding: number): string {
    let len =  x.toString().length;
    return ('0').repeat(padding - len) + x;
}

console.log(padZero(5, 3));

function something(x:number|string): string {
    if(typeof x === 'number') {
        return x.toFixed(2);
    } else {
        return x;
    }
}

interface Shape{
    type:string;
    area(x:number, y?:number): number
}

interface Circle extends Shape{
    radius: number
}

interface Square extends Shape{
    side:number
}

interface Rectangle extends Shape {
    height: number;
    width: number;
    area(l: number, w: number): number
}

function isSquare(s: Circle|Square|Rectangle): boolean {
    return 'side' in s;
}

// input 0|1|2|3|4|5|6| || a|b|c|d|e|f|g|h

function valueToArray(value:string): number[]|string[] {
    const split = value.split("|");
    if(isNaN(Number(split[0]))) {
        return split;
    } else {
        return split.map(Number);
    }
}

let a = valueToArray('a|b|c|d|e|f|g|h');
console.log(a);
console.log(valueToArray('0|1|2|3|4|5|6'));