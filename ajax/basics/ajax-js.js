//Global variable xmlHttp
var xmlHttp = createXmlHttpRequest();

function createXmlHttpRequest() {
    var xmlHttp;

    //IE5 or IE6
    if(window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e) {
            xmlHttp = false;
        }
    } else {
        try {
            xmlHttp = XMLHttpRequest();
        }catch(e) {
            xmlHttp = false;
        }
    }

    if(!xmlHttp) {
        alert('Error creating XMLHttpRequest ');
    }else{
        return xmlHttp;
    }
}

function process() {        //Load to the Html Page (inside onload)
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {    //4 means request is send successfully
        name = encodeURIComponent(document.getElementById("username").value);
        xmlHttp.open("GET", "ajax.php?name="+name,true);
        xmlHttp.send(null);
    }else {
        setTimeout('process()',1000);       //if the connecton break or something else start the process after 1000ms
    }
}

function handleServerResponse() {       //handle the response from the php
    if(xmlHttp.readyState == 4) {
        if(xmlHttp.status == 200) {
            var xmlResponse = xmlHttp.responseXML;
            var xmlDocumentElement = xmlResponse.documentElement;
            var helloMessage = xmlDocumentElement.firstChild.date;

            document.getElementById("message").innerHTML = '<strong>' + 
            helloMessage+'</strong>';

            setTimeout('process()', 1000);      //if connection lost-> try to execute process() after 1000ms
        }else {
           alert("There is a problem in the server. " + xmlHttp.statusText); 
        }
    }
}

/**
 * XMLHttpRequest has several properties.
 *  1.readyState = check whether the request go without any connection problem or other reason
 * 
 * statusText -> render the reason for the status (Describe the error message)
 * 
 * status codes ,
 *      404 = File Not Found (In here ajax.php like that)
 *      500 = internal server error
 */