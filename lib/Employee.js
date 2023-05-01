class Employee {

    constructor(emp) {
        const { name, id, email } = emp;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
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
