let age: number = 30
let name_: string = "supriya"

res = age + name_

console.log(res) //30supriya

//if we explicity assign the dataypes, then age and name cannot be concatinated

let age1 = 28
let name1 = "supriya2"

console.log(age1 + name1) //28supriya

//Datatypes
/*
1. number
2. string 
3. boolean
4. any [let n:any = 10]
5. void
6. Union
*/

let student1: any = "supriya";
console.log(`assigning value ${student1}`);

student1 = 20;
console.log(`after updating value ${student1}`);


// null types
let names1: null = null
console.log(names1)

//union types
let studentDetails: string | number | boolean;

studentDetails = 1;
console.log(studentDetails);
studentDetails = "supriya"
console.log(studentDetails);
studentDetails = "Engineering"
console.log(studentDetails);