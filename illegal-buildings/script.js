const DEFAULT_SLUG = 'kentron'

$(document).ready(function ($) {
    const textsPlace = $("#texts");

    const PARENT_HEIGHT = getPareHeight()
    const MOBILE_HEIGHT = 1000
    const DESKTOP_HEIGHT = 600
    const CONTAINER_MOBILE_CLASS = 'mobile_container'
    updateIframe(
        PARENT_HEIGHT,
        MOBILE_HEIGHT,
        DESKTOP_HEIGHT,
        CONTAINER_MOBILE_CLASS
    )
    $(window.parent).resize(function () {
        updateIframe(
            this.innerWidth,
            MOBILE_HEIGHT,
            DESKTOP_HEIGHT,
            CONTAINER_MOBILE_CLASS
        )
    })
    updateNumbers(data)
    updateTexts(DEFAULT_SLUG)

    $(".region").click(function (e) {
        let slug = $(this).attr("id")
        updateTexts(slug)
    })

    function updateNumbers(data) {
        for (let reg in data) {
            $("#" + reg + " .number").text(data[reg].texts.length != 0 ? data[reg].texts.length : "")
        }
    }


    function updateTexts(slug) {
        $("#title").text(data[slug].title)
        textsPlace.text("")
        for (let txt of data[slug].texts) {
            textsPlace.append("<p>" + txt.text + "</p>");
        }

    }
    function updateIframe(documentWidth, MOBILE_HEIGHT, DESKTOP_HEIGHT, CONTAINER_MOBILE_CLASS) {
        if (documentWidth < 900) {
            changeIframePareHeight(MOBILE_HEIGHT)
            $('.container').addClass(CONTAINER_MOBILE_CLASS)
        } else {
            $('.container').removeClass(CONTAINER_MOBILE_CLASS)
            changeIframePareHeight(DESKTOP_HEIGHT)
        }
    }
    function changeIframePareHeight(height) {
        window.parent.document.getElementsByClassName('map_iframe')[0].style.height = height
    }
    function getPareHeight() {
        return window.parent.document.getElementsByClassName('map_iframe')[0].style.height
    }

});



