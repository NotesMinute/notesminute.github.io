$(document).ready(function() {
    $.getJSON("/department/engineering/aeronautical-engineering/sandwich-construction/sandwich-construction.json",

        function(data) {
            var topic = '';
            var topic1 = '';
            var topic_head = '';

            var contributor_info = '';
            contributor_info += '<div class="col-lg-12 col-md-12 col-sm-12">'
            contributor_info += '<p class="text-right">' + data[0].contributor + '</p>'
            contributor_info += '<p class="text-right"><a target="_blank" href="' + data[0].linked_in + '"><i class="fab fa-linkedin-in"></i></a></p>'
            contributor_info += '</div>'
            $("#contributor-info").append(contributor_info);


            topic_head += '<div style="float:right">'
            topic_head += '<label class="switch">'
            topic_head += '<input type="checkbox" id="view" checked >'
            topic_head += '<span class="slider round"></span></label>'
            topic_head += '</div>'
            topic_head += '<h3 class="text-uppercase text-center">' + data[0].topic + '</h3>'
            topic_head += '<hr class="divider">'
            topic_head += '<p class="text-center">' + data[0].def + '</p>'
            $('#topic-details-head').append(topic_head);

            topic += '<div class="row">'
            $.each(data, function(key, value) {
                topic += '<div class="col-lg-4 col-md-6 col-sm-6 ">'
                topic += '<div class="mt-5 ">'
                topic += '<h4 class="text-muted mt-2">' + value.heading + '</h4>'
                topic += '<hr class="divider ml-0">'
                topic += '<p class="mt-2">' + value.notes + '</p>'
                topic += '</div>'
                topic += '</div>'
            });
            topic += '</div>'
            $('#topic-details').append(topic);
            topic1 += '<div class="row">'
            $.each(data, function(key, value) {
                topic1 += '<div class="col-lg-12 col-md-6 col-sm-6 ">'
                topic1 += '<div class="mt-5 ">'
                topic1 += '<h4 class="text-muted mt-2">' + value.heading + '</h4>'
                topic1 += '<hr class="divider ml-0">'
                topic1 += '<p class="mt-2">' + value.notes + '</p>'
                topic1 += '</div>'
                topic1 += '</div>'
            });
            topic1 += '</div>'
            $("#view").click(function() {
                $("#topic-details").toggle();
                $("#topic-details1").toggle();
            });

            $('#topic-details1').append(topic1);
            $("#topic-details").css("display", "block");
            $("#topic-details1").css("display", "none");
        });
});