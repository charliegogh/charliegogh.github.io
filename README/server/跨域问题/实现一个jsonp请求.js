function createJSONPRequest(url, callbackName){
    var script = document.createElement("script");
    script.src = url +"?callback=handleResponse";
    document.body.appendChild(script);
}

function handleResponse(res){
    console.log(res);
}

createJSONPRequest("http://localhost:3001/jsonp", "parseResponse")