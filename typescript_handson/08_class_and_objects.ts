class Students {
    readonly id: number;  //cannot be modified
    firstName: string;
    lastName?: string;  //optional
    static schoolName: string; //can be accessed only with classname and does impact the values of all the objects

    constructor(id: number, firstName: string, lastName?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        Students.schoolName = "Greenhouse school";
    }

    getStudentsDetails(): string {

        // console.log('The schoolName is', Students.schoolName);
        // console.log(`Id is ${this.id}`)
        if (this.lastName) {
            return `${this.id} - ${this.firstName} - ${this.lastName}.\n The schoolName is ${Students.schoolName}`
        }
        else {
            return `${this.id} - ${this.firstName}.\n The schoolName is ${Students.schoolName} `
        }

    }

    //static Method
    static getSchoolName(): string {
        return `${Students.schoolName}`
    }
}

let studObj1 = new Students(1, 'Supriya', 'Mainalli');
let studObj2 = new Students(2, 'Supriya2');

console.log(`Before school name change ${studObj1.getStudentsDetails()}`);
console.log(`Before school name change ${studObj2.getStudentsDetails()}`);

Students.schoolName = "Nandi International";
console.log(`After school name change ${studObj1.getStudentsDetails()}`);

console.log(`After school name change ${studObj2.getStudentsDetails()}`);
