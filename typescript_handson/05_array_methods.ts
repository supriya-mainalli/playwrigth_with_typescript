// 1. Adds single or multiple elements at the end of the array

let nums: number[] = [1, 2, 3, 4, 5]

nums.push(6)
nums.push(14, 21)

console.log(nums)

// 2. pop - removes last element in the array (single element)

nums.pop()

console.log('After removing the last elements', nums)

// 3. shift - removes first element from the array

let res = nums.shift()
console.log('The first element removed', res)

console.log(`the updated list is nums ${nums}`) // 1 is removed from the list

// 4. unshift - add the singal/multiple elements in the starting of the array

nums.unshift(1);
nums.unshift(10, 20);
console.log(`the update list after the unshift methods ${nums}`)

//5. Array concat 

let res1 = nums.concat([111, 222, 333], [444])

console.log(res1);

//6. slice() -> slicing

let ans = nums.slice(0, 4)
console.log(ans, typeof ans)

// 7. includes() - check if the element is present in the array and returns true/false. 

let nums2: number[] = [10, 20, 30, 40]

console.log(`checking if the lement is present or not ${nums2.includes(60)}`);

// 8. indexOf - returns the index of an element. If index not presents returns -1

let index_of_30: number = nums2.indexOf(30);
console.log(`the index of 30 is ${index_of_30}`);

// 9. toString() - converts list elements to string

let fruits: string[] = ['banana', 'apple', 'mango', 'cherry']
console.log(fruits);

let fruits_res: string = fruits.toString()

console.log(fruits_res);
console.log(typeof fruits_res)

