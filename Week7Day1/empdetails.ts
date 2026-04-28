class EmpDetails
{
    public EmpName:string="Nandhini"
    public EmpDescription:string="SDET"
    private EmpAge:number=30
    protected EmpPhno:number=9988776655

    printEmpDetails()
    {
        console.log(`The Employee Detail is ${this.EmpName}:${this.EmpDescription}: ${this.EmpAge}:${this.EmpPhno}`)
    }
    
public newmethod()
{
    this.EmpAge
    this.EmpPhno
}
//get-method to read the value
public get readData()
{
    return this.EmpAge
}
//set - method to update the value
public set writedata(age:number)
{
 this.EmpAge=age
}
}
let Emp = new EmpDetails()
Emp.printEmpDetails()
Emp.newmethod()
console.log(Emp.readData)
Emp.writedata=35
console.log(Emp.readData)
