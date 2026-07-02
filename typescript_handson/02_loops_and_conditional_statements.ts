//while loops

let i: number = 0

while (i <= 5) {
    console.log(i)
    i++
}

console.log(i) //6 due to i post increment

//for loops


for (let i: number = 0; i <= 5; i++) {
    console.log(`the value of i in the for loop ${i}`)
}

console.log(`the value of i after for loop ${i}`)

//if block

let n = 10

if (n < 10) {
    console.log(`the value of n is less than 10`)

}
else if (n > 10) {
    console.log(`the n is greater than 10`)
}
else {
    console.log('invalid error')
}

// switch statements

let day: number = 1

switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    default: console.log("invalid weekday")
}