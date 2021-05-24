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


                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] != 0) {
                        data += '<div class="col-lg-4 col-md-6 col-sm-12 text-center">';
                        data += '<div class=" shadow-sm p-3 mb-5 bg-white rounded">'
                        data += '<a target="_blank" href=' + hreflink + arr[i] + '>';
                        data += arr[i];
                        data += '</a>';
                        data += '<p><br></p>'
                        data += '</div>'

                        data += '<p><br></p>'
                        data += '</div>';
                    }
                    else
                    {

                        data += '<p class="text-muted">No results found for '+ queryString["search"]+'</p>'

                    }
                    }


                    data += '</div>'
                    $("#parseData").append(data);
                }
            });