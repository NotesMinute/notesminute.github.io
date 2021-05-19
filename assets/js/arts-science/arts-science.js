$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;
    $.getJSON("/department/arts-science/arts-science.json",
        function(data) {
            $.each(data, function(key, value) {
                var dept_url = '<a href="' + value.default + '"target="_blank">'+value.dept+'</a>';
                var share_url = '<a href="' + value.share + '"target="_blank" data-action="share/whatsapp/share"><i class="fab fa-whatsapp"></i></a>';
                // var share_url = '<a href="' + value.share + '"target="_blank"><i class="fab fa-whatsapp"></i></a>';
                // <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a>
                t.row.add([
                    //     value.name,
                    dept_url,
                    value.available,
                    share_url
                    //     value.intern_category
                ]).draw(false);
            });
        });
});