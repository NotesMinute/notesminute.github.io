$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;
    $.getJSON("/department/engineering/aeronautical-engineering/aeronautical-engineering.json",
        function(data) {
            $.each(data, function(key, value) {
                var topic_url = '<a href="' + value.default + '"target="_blank">'+value.topic+'</a>';
                var share_url = '<a href="' + value.share + '"target="_blank"><i class="fab fa-whatsapp"></i></a>';
                t.row.add([
                    //     value.name,
                    topic_url,
                    value.available,
                    share_url,
                    //     value.intern_category
                ]).draw(false);
            });
        });
});