class LoginTest {
    public browserName: string = "Chrome"
    private password: string = "admin123"
    protected userName: string = "tester"

    public openApplication() 
    {
        console.log(`The application is opened with ${this.browserName}: ${this.password}:${this.userName}`)
    }
    public login() 
    {
        this.password
        this.userName
    }
    //get- method to read the value
    public get readData() 
    {
        return this.password

    }

    //set-method to update the valaue
    public set writeData(pwd: string) 
    {
        this.password = pwd
    }
}

let login = new LoginTest()
login.openApplication()
login.login()
//console.log(login.openApplication())
//console.log(login.login())
console.log(login.readData)
login.writeData = "admin987"
console.log(login.readData)


