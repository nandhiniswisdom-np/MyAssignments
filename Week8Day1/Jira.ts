import axios from "axios";

let email="nandhiniswisdom@gmail.com"
let endPoint="https://nandhiniswisdom.atlassian.net/rest/api/2/issue"
let apiToken="ATATT3xFfGF085lc65h-YZ25UKKP-chRXtLdPrcHvO9CHp2evVtVH7V7dJYK3sVDIb4o7Idiojnp4MHwG_n-V3hKsj2thtkvhMkzuSMC0ZWwttX2jyCqadFZwaGRkcMOt0-YuYN3XFRFbud6-pKumOn56Jo_mTNG5c_A-8pZ8bcYp6viKc3Hl-E=098071FA"
let apiKey="PMW2"
let SELF:any
let ID:any



async function CreateIssue(Summary:string, Description:string){
//create a req via post method

const response= await axios.post(endPoint,
{

    "fields": {
"project":{
"key":apiKey
},

"summary":Summary,
"description":Description,

"issuetype": {
      "name": "Bug"
    },

    "assignee": {
      "id": "712020:c4735d70-2f40-4ea9-8b97-41659eeff257"
    },


    }
},
{
    headers:{
        "Content-Type":"application/json"
    },
    auth:{

        "username":email,
        "password":apiToken
    }


})
//console.log(response);
console.log(response.data);
console.log(response.status);
console.log(response.statusText);
SELF=response.data.self
console.log(SELF);

//fetch the req via get method
const response1= await axios.get(SELF,
{
    headers:{
        "Content-Type":"application/json"
    },
    auth:{

        "username":email,
        "password":apiToken
    }


})
//console.log(response1);
console.log(response1.data);
console.log(response1.status);
console.log(response1.statusText);

//update the req via PUT method
const response2= await axios.put(SELF,
{

    "fields": {
"project":{
"key":apiKey
},

"summary":Summary,
"description":Description,

"issuetype": {
      "name": "Cosmetic issue"
    },

    "assignee": {
      "id": "712020:c4735d70-2f40-4ea9-8b97-41659eeff257"
    },


    }
},
{
    headers:{
        "Content-Type":"application/json"
    },
    auth:{

        "username":email,
        "password":apiToken
    }


})
//console.log(response2);
console.log(response2.data);
console.log(response2.status);
console.log(response2.statusText);
//delete the req via delete method
const response3= await axios.delete(SELF,
{
    headers:{
        "Content-Type":"application/json"
    },
    auth:{

        "username":email,
        "password":apiToken
    }


})
//console.log(response1);
console.log(response3.data);
console.log(response3.status);
console.log(response3.statusText);

}
CreateIssue("Bug created through PW API","Creating Jira request")