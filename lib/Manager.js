const Employee = require('./Employee');
class Manager extends Employee{
    Manager(oNumber) {
        this.oNumber = oNumber;
        this.getRole = () => {
            return 'Manager';
        }
    }
}