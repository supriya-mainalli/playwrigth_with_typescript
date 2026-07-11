//1. Creating an object

let employee = {
    id: 12,
    name: 'supriya',
    job: 'engineer',
    getJobDetails: function (): string {
        return `${this.id}, ${this.name}`;
    }
}

// Accessing the data from the employee objects
console.log(employee.getJobDetails());
console.log(employee.name);


//using bracket notations
console.log(employee["name"])
console.log(employee["getJobDetails"]());

//updating the data from the objects
employee["name"] = "Manju";
console.log(employee["name"])

employee.name = "Maruthi"
console.log(employee)


//2. create object using type alias

//defination
type employee2 = {
    name: string,
    id: number,
    job: string,
    getEmpDetails: () => string
}

//declarations
let emp: employee2 = {
    name: "supriya",
    id: 10,
    job: "engineer",
    getEmpDetails: function () {
        return `${this.name} and ${this.id}`
    }
}

console.log(emp.getEmpDetails());

console.log(`using the bracket type ${emp['getEmpDetails']()}`);

//best practice

let student = {
    id: 1234,
    name: "supriya",
    class: "10th",
    getStudentDetails(): string {
        return `${this.name}, ${this.class}, ${this.id}`
    }
}

console.log(`the student details is ${student.getStudentDetails()}`);