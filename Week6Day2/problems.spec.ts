import {test,expect} from '@playwright/test'
const username=`admin`;
const password=`sooM+H@w1P2P`   
const login=`${username}:${password}`
const value= btoa(login)
console.log(value);

let ID:any
test.describe.serial("Execute in serial mode", async()=>{
test("Creating new problem using PW API", async({request})=>{

let responsebody=await request.post("https://dev231684.service-now.com/api/now/table/problem",
    {
        headers:{
            "content-Type": "application/json",
            "Authorization": `Basic ${value}`
        },
        data:
        {
            "description":"Sample problem creation"
        }
        })
 let res = await responsebody.json()
 console.log(res);

 let status=await responsebody.status()
console.log(status);

let statustext=await responsebody.statusText()
console.log(statustext);

expect(status).toBe(201)
expect(statustext).toBe("Created")
 
ID= res.result.sys_id;
console.log(ID);

    })

test("fetch problem using PW API", async({request})=>{

let responsebody=await request.get(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
    {
        headers:
        {
            "content-Type": "application/json",
            "Authorization": `Basic ${value}`
        }
    })
    let res = await responsebody.json()
 console.log(res);

 let status=await responsebody.status()
console.log(status);

let statustext=await responsebody.statusText()
console.log(statustext);

expect(status).toBe(200)
expect(statustext).toBe("OK")
})

test("update problem using PW API", async({request})=>{

let responsebody=await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,   
    {
        headers:
        {
            "content-Type": "application/json",
            "Authorization": `Basic ${value}`
        },
        data:
        {
            "short description":"Sample problem updation"
        }
    })

    let res=await responsebody.json()
    console.log(res);

    let status = await responsebody.status();
    console.log(status);

    let statustext=await responsebody.statusText()
    console.log(statustext);

    expect(status).toBe(200)
    expect(statustext).toBe("OK")
})

test("Deleting problem using PW API", async({request})=>{

let responsebody=await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,  
    {
        headers:
        {
            "content-Type": "application/json",
            "Authorization": `Basic ${value}`
        }
    })  

    let status = await responsebody.status();
    console.log(status);    
    let statustext=await responsebody.statusText()
    console.log(statustext);
    expect(status).toBe(204)
    expect(statustext).toBe("No Content")
})

})