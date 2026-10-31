
class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}


class Student extends Person {

    constructor(name, branch) {

     
        super(name);

        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}


const student1 = new Student("Pratiksha", "CSE");


student1.showName();
student1.showBranch();

console.log(student1 instanceof Student);
console.log(student1 instanceof Person);