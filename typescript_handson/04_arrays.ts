// empty array

let names: string[] = [];
let names2: string[] = ['supriya', 'manju', 'mainalli'];
console.log(names2);


// 2. Generic Array<T>

let data: Array<any> = [1, 2, "supriya", "mainalli"];
// console.log(data);
let empIds: Array<number> = [1, 2, 56, 23, 44];
let mixData: Array<number | string> = ["supriya", 23444, "mainalli"];

// 3. reading the array values

for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
}

// search the element in array using functions

let result = (nums: Array<number>, target: number): number => {
    for (let i: number = 0; i < nums.length; i++) {
        console.log('*******', nums[i])
        if (nums[i] === target) {
            return i;
        }
    }
    return -1 // number not found
}

console.log(result([12, 45, 67, 2, 3, 4], 3))


// captialize array

let capsResult = (names: Array<string>): Array<string> => {
    for (let i = 0; i < names.length; i++) {
        names[i] = (names[i].toUpperCase());
    }
    return names;
}

let names10: Array<string> = ['supriya', 'mainalli', 'manju']
console.log("the caps names", capsResult(names10))


// tuples -> when the array size is fixed then tuple is used

let person: [number, string] = [45, "john"] // fixed size as number and the string

let person1: string | number = 30 // union data type

//Array of tuples

let students: [number, string][] = [[101, 'supriya'], [102, 'mainalli'], [103, 'manjunatha']];

for (let i: number = 0; i < students.length; i++) {
    console.log(students[i])
}

