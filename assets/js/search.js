var queryString = new Array();
$(function() {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["search"] != null && queryString["list"] != null) {
        var hreflink = "https://www.notesminute.com/topics/";
        var list = queryString["list"];
        var data = '';
        var arr = list.split(',');
        data += '<div class="row justify-content-center mt-5" >'
        data += '<div class="col-lg-12 text-center">';
        data += '<strong>Did you mean:  </strong>';
        data += queryString["search"];
        data += '<br>';
        data += '</div >'
        data += '</div >'
        data += '<div class="row justify-content-center mt-5" >'
        data += '<div class="paginate 1">'
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                data += '<div class="items ">'
                // data += '<div class="col-lg-4 col-md-6 col-sm-12 text-center">';
                data += '<div class=" shadow-sm p-3 mb-5 bg-white">'
                data += '<div><a target="_blank" href=' + hreflink + arr[i] + '>';
                data += "What is ";
                data += arr[i].toUpperCase() + " ?";
                data += '</a>';
                // data += '<p><br></p>'
                data += '</div>'
                // data += '<p><br></p>'
                data += '</div>';
                data += '</div>';
            } else {
                data += '<p class="text-muted text-center">No results found for ' + queryString["search"] + '</p>'
                data += '<section class="page-section">'
                data += '<div class="container">'
                data += '<div class="row justify-content-center">'
                data += '<div class="col-lg-12 text-center">'
                data += '<h4><strong>APPLY FOR INTERNSHIP</strong></h4>'
                data += '<hr class="divider">'
                data += '<p class="text-muted mt-2">Any college students( any course / any semester ) to professionals can participate</p><br>'
                data += '<a class="btn btn-primary js-scroll-trigger" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdDWNmbd-TFbzcOvzKfp20IqSW-Faem33oJM58gNC1wGIDI6g/viewform">REGISTER</a>'
                data += '</div>'
                data += '</div>'
                data += '</section>'
            }
        }
        data += '<div class="pager">'
        data += '<div class="firstPage">&laquo;</div>'
        data += '<div class="previousPage">&lsaquo;</div>'
        data += '<div class="pageNumbers"></div>'
        data += '<div class="nextPage">&rsaquo;</div>'
        data += '<div class="lastPage">&raquo;</div>'
        data += '</div>'
        data += '</div>'
        data += '</div>'
        $("#parseData").append(data);
    }
    $(".paginate").paginga({

    });
});