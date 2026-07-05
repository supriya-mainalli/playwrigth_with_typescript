// 1. Named functions with parmaeters and return types
function addNumbers(a: number, b: number): number {
    return a + b
}

console.log(addNumbers(5, 3))


// 2. Named functions with no parameters and no return type
function display(): void {
    console.log("Hello supriya")
}

display()

// 3. Named functions with Rest parameters
function addNumbers2(...nums: number[]): number {
    let sum_: number = 0
    let i;
    for (i = 0; i < nums.length; i++) {
        sum_ += nums[i]
    }
    return sum_
}

console.log(addNumbers2(1, 2))

// 4. Named function with Rest parameter with different types as params

function getElements(...elements: (string | number)[]): number {
    return elements.length
}

let a = getElements(1, 3, 2, 'supriya', 'm', 10)
console.log(`the total length is ${a}`);
console.log(getElements(10, 20, 30))

// 5. Named functions with optional params

function getContactDetails(name: string, email: string, phone?: string): void {
    console.log('the name is ', name);
    console.log('the email is', email);

    if (phone !== undefined) {
        console.log('the phone is ', phone);
    }

}

getContactDetails('supriya', 'abc@gmail.com')
getContactDetails('supriya1', 'abc1@gmail.com', '478658356');

// 6. Named function with default parmaeters

function getDiscount(price: number, discount: number = 0.5): number {
    return price * discount
}

console.log(getDiscount(1000));
console.log(getDiscount(2000, 0.3))


// 7. Anonymous functions 

let multiply = function (a: number, b: number): number {
    return a * b;
}

console.log('the mvalue is ', multiply(3, 4))

// Arrow functions

let additionFunc = (a: number, b: number): number => a + b;

console.log(additionFunc(50, 20));


// Arrow function with Rest parameters

let elementSize = (...nums: number[]): number => nums.length

console.log('the elements size', elementSize(12, 34, 56, 342, 24324, 5));

//Arrow function with optinal parameters

let getContactDetails2 = (name: string, phone: number, email?: string): void => {
    console.log('the name of arrow function is', name);
    console.log('the phone number is', phone);
    if (email) {
        console.log('the email is', email);
    }
}

getContactDetails2('supriya', 236546735726, 'abs@gmail.com');
getContactDetails2('supriya1', 23654673572236);