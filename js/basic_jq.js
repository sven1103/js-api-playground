$(document).ready(function(){
    console.log("Document loaded!")

    var repoUrl = "https://api.github.com/repos/SciLifeLab/NGI-RNAseq/tags"

    $("#request_button").click(function(){
        $("#api_content").load(repoUrl, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                $(this).text("Work it!")
            if(statusTxt == "error")
                $(this).text("Request failed: " + xhr.status + ":" + xhr.statusText)
        })
    })


})