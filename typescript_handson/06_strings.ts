//1. split and return the list format
let str1: string = "hello supriya";

let res = str1.split(" ");
console.log(res);

// 2. Length

console.log(`the string length is ${res.length}`)

//3. substring

let str2: string = "Hello World!"
console.log(str2.substring(1, 3));

//4. trim(), ltrim(), rtrim -> to removes white spaces

let str3: string = "    Hello world!      "
console.log(str3.trim()) // removes whitespace both ends

console.log(`trim start is ${str3.trimStart()}`);
console.log(`trim end is ${str3.trimEnd()}`);


//5. toUpperCase() and toLowerCase()

console.log(str3.trim().toUpperCase()) // HELLO WORLD

console.log(str3.trim().toLowerCase());

//6. startsWith() and endsWith()
console.log(`check startwith ${str3.trim().startsWith("Hello")}`);
console.log(`check endswith ${str3.trim().endsWith('!')}`);

//7. includes -> to check if the char prsent in the string

let str6: string = "hello supriya";
console.log(str6.includes("sup"));

//8. replace()

console.log(str6.replace("hello", "namsate"))

//9. CharAt() and indexOf()

console.log(str6.charAt(4)); // takes index
console.log(str6.indexOf("l"));

//10. concat

let str7: string = "mainalli"

console.log(str6.concat(str7));