var len;
var results = '';

function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
            url: 'https://adjoseph-421-search-api.cognitiveservices.azure.com/bing/v7.0/search/?' + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "5df7e7110de148609756d7ed1c4702de");
            },
            type: "GET",
        })
        .done(function (data) {
            len = data.webPages.value.length;
            for (var i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}

$(function () {
    $('#search').click(function () {
        apiSearch();
    });
});

$(function () {
    $('#header').click(function () {
        $('body').css('background-image', 'url(igor-rodrigues-Ug2aF0-HmnE-unsplash.jpg)');         
    });
});

$(function () {
    $('#timeButton').click(function () {
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes();
        $('#time').html(time);
        $('#time').dialog();
    });
});
