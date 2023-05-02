const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, oNumber) {
        super(name, id, email, oNumber);
        this.role = 'Manager';
    }

    getoNumber() {
        return this.oNumber;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Manager;