$(document).ready(function(){
    console.log("Document loaded!")

    var repoUrl = "https://api.github.com/repos/SciLifeLab/NGI-RNAseq/tags"

    $("#request_button").click(function(){
        $.getJSON( "https://api.github.com/repos/SciLifeLab/NGI-RNAseq/tags", function( data ) {
            // do something with the parsed JSON, now in `data`
            data.forEach(element => {
                console.log(element.name)
            });
        })
    })
})