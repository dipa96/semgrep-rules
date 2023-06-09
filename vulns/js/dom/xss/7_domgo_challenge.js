// Ran 2 rules on 1 file: 8 findings.
// 1-2 FP
//https://domgo.at/cxss/intro

// 1
let hash = location.hash;
if (hash.length > 1) {
    let hashValueToUse = unescape(hash.substr(1));
    let msg = "Welcome <b>" + hashValueToUse + "</b>!!";
    document.getElementById("msgboard").innerHTML = msg;
}

// 2
let rfr = document.referrer;
let paramValue = unescape(getPayloadParamValueFromUrl(rfr));
if (paramValue.length > 0) {
    let msg = "Welcome <b>" + paramValue + "</b>!!";
    document.getElementById("msgboard").innerHTML = msg + randomValue + "ciao";
    // Add False Positive (FP)
    document.getElementById("msgboard").innerHTML = falsopositivo;
} else {
    document.getElementById("msgboard").innerHTML = "Parameter named <b>payload</b> was not found in the referrer.";
}

// 3
let responseBody = xhr.responseText;
let responeBodyObject = JSON.parse(responseBody);
let msg = "Welcome <b>" + responeBodyObject.payload + "</b>!!";
document.getElementById("msgboard").innerHTML = msg;

// 4
let ws = new WebSocket(webSocketUrl);
ws.onmessage = function (evt) {
    
    let rawMsg = evt.data;
    let msgJson = JSON.parse(rawMsg);
    let msg = "Welcome <b>" + msgJson.payload + "</b>!!";
    document.getElementById("msgboard").innerHTML = msg;
};

// 5
window.onmessage = function (evt) {
    let msgObj = evt.data;
    let msg = "Welcome <b>" + msgObj.payload + "</b>!!";
    document.getElementById("msgboard").innerHTML = msg;
};

// 5 DOM PURIFY SANITIZED
window.onmessage = function (evt) {
    let msgObj = evt.data;
    let msg = "Welcome <b>" + msgObj.payload + "</b>!!";
    let clean = DOMPurify.sanitize(msg);
    document.getElementById("msgboard").innerHTML = clean;
};

// 6 
function random(){
let payloadValue = localStorage.getItem("payload", payload);
let hack = "Welcome " + payload + "!!";
document.getElementById("msgboard").innerHTML = hack;
}

// 7
// Adding false positive, how to avoid them?
// let hash1 = location.hash;
let hashValueToUse = hash1.length > 1 ? unescape(hash1.substr(1)) : hash1;
hashValueToUse = hashValueToUse.replace(/</g, "&lt;").replace(/>/g, "&gt;");
let msg1 = "<a href='#user=" + hashValueToUse + "'>Welcome</a>!!";
document.getElementById("msgboard").innerHTML = msg1;

// 10
/* 
<script>
var victim= window.open('https://domgo.at/cxss/example/10?lang=en&user=ID-javascript', ':alert(1)');
</script>
*/
let urlParts = location.href.split("?");
if (urlParts.length > 1) {
    
    let queryString = urlParts[1];
    let queryParts = queryString.split("&");
    let userId = "";
    for (let i = 0; i < queryParts.length; i++) {
        
        let keyVal = queryParts[i].split("=");
        if (keyVal.length > 1) {
            if (keyVal[0] === "user") {
                
                userId = keyVal[1];
                break;
            }
        }
    }
    if (userId.startsWith("ID-")) {

        userId = userId.substr(3, 10);
        userId = userId.replace(/"/g, "&quot;");
        let windowValueToUse = window.name.replace(/"/g, "&quot;");
        let msg = "<a href=\"" + userId + windowValueToUse + "\">Welcome</a>!!";
        document.getElementById("msgboard").innerHTML = msg;
    }
}
