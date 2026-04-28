"use strict";
class EmpDetails {
    EmpName = "Nandhini";
    EmpDescription = "SDET";
    EmpAge = 30;
    EmpPhno = 9988776655;
    printEmpDetails() {
        console.log(`The Employee Detail is ${this.EmpName}:${this.EmpDescription}: ${this.EmpAge}:${this.EmpPhno}`);
    }
    newmethod() {
        this.EmpAge;
        this.EmpPhno;
    }
    //get-method to read the value
    get readData() {
        return this.EmpAge;
    }
    //set - method to update the value
    set writedata(age) {
        this.EmpAge = age;
    }
}
let Emp = new EmpDetails();
Emp.printEmpDetails();
Emp.newmethod();
console.log(Emp.readData);
Emp.writedata = 35;
console.log(Emp.readData);
