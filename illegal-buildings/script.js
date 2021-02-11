const DEFAULT_SLUG = 'kentron'

$(document).ready(function ($) {
    const textsPlace = $("#texts");
    
    updateNumbers(data)
    updateTexts(DEFAULT_SLUG)
    
    $(".region").click(function(e){
        let slug = $(this).attr("id")
        updateTexts(slug)
    })
    
    function updateNumbers(data) {
        for (let reg in data) {
            $("#" + reg + " .number").text(data[reg].texts.length!=0 ? data[reg].texts.length : "")
        }
    }


    function updateTexts(slug){
        $("#title").text(data[slug].title)
        textsPlace.text("")
        for(let txt of data[slug].texts){
            textsPlace.append("<p>"+txt.text+"</p>");
        }

    }
});



