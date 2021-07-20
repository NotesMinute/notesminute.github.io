$(document).ready(function() {
    $.getJSON("/assets/js/youtube.json",
        function(data) {
            var content = '';
            var social_media = '';
            var hash_tags = '';
            // social_media += '<div class="row">'
            // social_media += '<div class="col-lg-12">'
            // social_media += '<a class="mr-2" href="' + data[0].fb_url + '" target="_blank"><i class="fab fa-facebook-f fa-2x zoom"></i></a>'
            // social_media += '<a class="mr-2" href="' + data[0].twitter_url + '" target="_blank"><i class="fab fa-twitter fa-2x zoom"></i></a>'
            // social_media += '<a href="' + data[0].insta_url + '" target="_blank"><i class="fab fa-instagram fa-2x zoom"></i></a>'
            // social_media += '</div>'
            // social_media += '</div>'

            // hash_tags += '<div class="row">'
            // hash_tags += '<div class="col-lg-12">'
            // hash_tags += '<h4 class="font-weight-bold" style="color:#44d9e6;">' + data[0].hashtags + '</h4>'
            // hash_tags += '</div>'
            // hash_tags += '</div>'
            content += '<div class="row">'
            $.each(data, function(key, value) {
                content += '<div class="col-lg-6 col-md-12 col-sm-12">'
                content += '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + value.url + '"></iframe>'
                content += '</div>'
                content += '<div class="col-lg-6 col-md-12 col-sm-12">'
                content += '<h4>' + value.name + '</h4>'
                content += '<hr class="divider ml-0">'
                if (value.description_1 != "") {
                    content += '<p class="text-muted">' + value.description_1 + '</p>'
                    content += '<br/>'
                }
                if (value.description_2 != "") {
                    content += '<p class="text-muted">' + value.description_2 + '</p>'
                    content += '<br/>'
                }
                if (value.description_3 != "") {
                    content += '<p class="text-muted">' + value.description_3 + '</p>'
                    content += '<br/>'
                }
                if (value.description_4 != "") {
                    content += '<p class="text-muted">' + value.description_4 + '</p>'
                    content += '<br/>'
                }
                if (value.description_5 != "") {
                    content += '<p class="text-muted">' + value.description_5 + '</p>'
                    content += '<br/>'
                }
                if (value.description_6 != "") {
                    content += '<p class="text-muted">' + value.description_6 + '</p>'
                    content += '<br/>'
                }
                if (value.description_7 != "") {
                    content += '<p class="text-muted">' + value.description_7 + '</p>'
                    content += '<br/>'
                }
                content += '<hr>'
                content += '</div>'


            });
            content += '</div>'
            $('#youtube-container').append(content);
            // $('#social-media').append(social_media);
            // $('#hash-tags').append(hash_tags);
        });
});