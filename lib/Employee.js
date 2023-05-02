class Employee {

    constructor(emp) {
        const { name, id, email, github, school, oNumber } = emp;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        this.github = github;
        this.school = school;
        this.oNumber = oNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Employee;
