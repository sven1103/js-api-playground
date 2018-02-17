console.log("Javascript code init...")

/* API base url of GitHub */
API_BASE_URL = "https://api.github.com"
/* User request path */
API_REQ_USER = API_BASE_URL + "/users/"
/* A test request url */
testRequest = API_REQ_USER + "sven1103"

var xhr = makeApiRequest(testRequest)

/**
 * Funtion that performs a GET request to
 * an given URL.
 * @async
 * @param {string} apiURL - The target API url.
 */
function makeApiRequest(apiURL){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState == 4){
            printResponse(this)
        }
    }
    xhr.open("GET", apiURL, true)
    xhr.send()
    return xhr
}

/**
 * Prints some info about the finished GET request.
 * @param {Object} xhr - An XMLHttpRequest object.
 */
function printResponse(xhr){
    console.log(xhr.status)
    console.log(xhr.statusText)
    console.log(xhr.responseText)
}