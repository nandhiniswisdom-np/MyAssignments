export class LoginPage{
    //property-> stores the value
    URL:string
    title:string="FB Login Page"

    //methods-> for actionables
    Login(){
    console.log("Logging in");
    }
    Logout(){
        console.log("Logging out");
     
}
//default constructor
/* constructor(){
    console.log("this is a default constructor");
    
} */
//parameterized constructor
constructor(URL:string){
this.URL=URL
}
}
//creating the object (let obj=new classname())
let Lp=new LoginPage("www.facebook.com")
Lp.Login()
Lp.Logout()
console.log(Lp.URL);
console.log(Lp.title);
