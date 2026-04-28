"use strict";
class Maths {
    add = 5;
    sub = 56;
    mul = 9;
    printMaths() {
        console.log(`The Maths values are ${this.add}:${this.sub}: ${this.mul}`);
    }
    newmethod() {
        console.log(this.sub);
    }
    //get-method to read the value
    get readData() {
        return this.sub;
    }
    //set - method to update the value
    set writedata(mark) {
        this.sub = mark;
    }
}
let validation = new Maths();
validation.printMaths();
validation.newmethod();
console.log(validation.readData);
validation.writedata = 90;
console.log(validation.readData);
