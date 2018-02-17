console.log("Javascript code init...")

/* API base url of GitHub */
API_BASE_URL = "https://api.github.com"
/* User request path */
API_REQ_USER = API_BASE_URL + "/users/"
/* User repo request path */
API_REQ_REPO = API_BASE_URL + "/repos/"

/* A test request url */
testRequest = API_REQ_USER + "sven1103"
/* A test repo request */
testRepoRequest = API_REQ_REPO + "SciLifeLab/NGI-RNAseq"
/* Test tag request */
testTagsRequest = "https://api.github.com/repos/SciLifeLab/NGI-RNAseq/tags"

//makeApiRequest(testRequest, printResponse)
//makeApiRequest(testRepoRequest, printResponse)

makeApiRequest(testRepoRequest, function(xhr){
        console.log(xhr)
        var tagUrl = extractTagUrl(JSON.parse(xhr.responseText))
        console.log(tagUrl)
})

makeApiRequest(testTagsRequest, function(xhr){
    console.log(xhr.response)
})


/**
 * Extracts the tags url of a GitHub repo
 * @param {Object} xhr - An XMLHttpRequest object.
 */
function extractTagUrl(repoJSON) {
    return repoJSON.tags_url
}


/**
 * Funtion that performs a GET request to
 * an given URL.
 * @async
 * @param {string} apiURL - The target API url.
 */
function makeApiRequest(apiURL, func){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log("Annnd go")
            func(xhr)
        } else if (this.readyState == 4 && this.status > 400) {
            console.log("GET request failed.")
            console.log(this.status)
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