class APIClient {
    sendRequest(endpoint: string): void
    sendRequest(endpoint: string, requestbody: string, requestStatus: boolean): void
    sendRequest(endpoint: string, requestbody?: string, requestStatus?: boolean) {
        if (requestbody && requestStatus) {
            console.log("Endpoint is "  + endpoint  + "Request body is " + requestbody  +  "Request status is " + requestStatus);
        }
        else {
            console.log("Endpoint is " + endpoint);
        }
    }
}
let API=new APIClient()
API.sendRequest("www.googgle.com")
API.sendRequest("www.google.com","name:Nandhini",true)