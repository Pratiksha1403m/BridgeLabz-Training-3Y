
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Person Name: " + this.name);
};


function Faculty(name, subject) {
    Person.call(this, name);

    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Subject: " + this.subject);
};


function Professor(name, subject, experience) {
    Faculty.call(this, name, subject);

    this.experience = experience;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Experience: " + this.experience + " years");
};


const professor1 = new Professor(
    "Rahul",
    "Computer Science",
    10
);


professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();