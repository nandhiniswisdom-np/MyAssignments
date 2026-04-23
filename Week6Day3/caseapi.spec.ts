import {test,expect} from '@playwright/test'

let URL:any;
let TokenType:any;
let Token:any;
let ContactID:any;
let AccountID:any;
let CaseID:any;

test.describe("Salesforce API Testing",()=>{
test('Generating Token using PW API', async({request})=>{
    let responsebody = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            form:{
                "grant_type":"password",
                "client_id":"3MVG9dAEux2v1sLuxTTJFIrAu1bKsAvP2rt0aakHZHlA1wYUvopbx3eX46yvQ7jitqEeLpgGEqRvkiRP1RwOo",
                "client_secret":"3C7FDF20D435AE6B4725B998FEDD231CE78E2791B6F9073E6ABFF0B5465FA16A",
                "username":"nandhiniswisdom.af1b41b45784@agentforce.com",
                "password":"Taara@2022iyldi6XB9DDkDHq904QpRhKP1"
            }
    })

let response = await responsebody.json()
console.log(response);

let status= await responsebody.status()
let statustext= await responsebody.statusText()
console.log(status);
console.log(statustext);

expect(status).toBe(200)
expect(statustext).toBe("OK")

URL = response.instance_url;
TokenType = response.token_type;
Token = response.access_token;
console.log(URL);
console.log(TokenType);
console.log(Token);
})
test("Create contact using PW API", async({request})=>
{
    let responsebody = await request.post(`${URL}/services/data/v65.0/sobjects/Contact`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${TokenType} ${Token}`
            },
            data:{
                "FirstName":"Madhu",
                "LastName":"Bala",
                "Salutation":"Mrs."
            
            }
        })

let response= await responsebody.json()
console.log(response);

let status= await responsebody.status()
let statustext= await responsebody.statusText()
console.log(status);
console.log(statustext);    
expect(status).toBe(201)
expect(statustext).toBe("Created")
ContactID=response.id;
console.log(ContactID);

})
test("Create account using PW API", async({request})=>
{
    let responsebody = await request.post(`${URL}/services/data/v65.0/sobjects/Account`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${TokenType} ${Token}`
            },
            data:{
               "Name":"Madhubala Studio"
            
            }
        })

let response= await responsebody.json()
console.log(response);

let status= await responsebody.status()
let statustext= await responsebody.statusText()
console.log(status);
console.log(statustext);    
expect(status).toBe(201)
expect(statustext).toBe("Created")
AccountID=response.id;
console.log(AccountID);

})
test("Create case using PW API", async({request})=>
{
    let responsebody = await request.post(`${URL}/services/data/v65.0/sobjects/Case`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${TokenType} ${Token}`
            },
            data:{
               "ContactID":`${ContactID}`,
                "AccountID":`${AccountID}`,
                "Status":"New",
                "Origin":"Web"
            
            }
        })

let response= await responsebody.json()
console.log(response);

let status= await responsebody.status()
let statustext= await responsebody.statusText()
console.log(status);
console.log(statustext);    
expect(status).toBe(201)
expect(statustext).toBe("Created")
CaseID=response.id;
console.log(CaseID);

})
test("Fetching case details using PW API", async({request})=>
{
let responsebody = await request.get(`${URL}/services/data/v65.0/sobjects/Case/${CaseID}`,
{
    headers:{
         "Content-Type":"application/json",
            "Authorization":`${TokenType} ${Token}`
    }
})

let response= await responsebody.json()
console.log(response);

let status= await responsebody.status()
let statustext= await responsebody.statusText()
console.log(status);
console.log(statustext);    
expect(status).toBe(200)
expect(statustext).toBe("OK")
})
test("Update case details using PW API", async({request})=>{

    let responsebody = await request.patch(`${URL}/services/data/v65.0/sobjects/Case/${CaseID}`,
        {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${TokenType} ${Token}`
        },
        data:{
            "Status":"Escalated"
        }
    })


    let status= await responsebody.status()
    let statustext= await responsebody.statusText()
    console.log(status);
    console.log(statustext);
    expect(status).toBe(204)
    expect(statustext).toBe("No Content")


})
test("Delete case details using PW API", async({request})=>{

    let responsebody = await request.delete(`${URL}/services/data/v65.0/sobjects/Case/${CaseID}`,
        {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${TokenType} ${Token}`
        }
    })


    let status= await responsebody.status()
    let statustext= await responsebody.statusText()
    console.log(status);
    console.log(statustext);
    expect(status).toBe(204)
    expect(statustext).toBe("No Content")


})
})