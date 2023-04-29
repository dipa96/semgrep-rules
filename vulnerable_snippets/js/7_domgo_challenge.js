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