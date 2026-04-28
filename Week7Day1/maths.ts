class Maths
{
    public add:number=5
    private sub:number=56
    protected mul:number=9

    printMaths()
    {
        console.log(`The Maths values are ${this.add}:${this.sub}: ${this.mul}`)
    }
    
public newmethod()
{
    console.log(this.sub)
}
//get-method to read the value
public get readData()
{
    return this.sub
}
//set - method to update the value
public set writedata(mark:number)
{
 this.sub=mark
}
}
let validation = new Maths()
validation.printMaths()
validation.newmethod()
console.log(validation.readData)
validation.writedata=90
console.log(validation.readData)
