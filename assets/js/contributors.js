$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;
    $.getJSON("/about/contributors/contributors.json",
        function(data) {
            $.each(data, function(key, value) {
                var linkedin_url = '<a href="' + value.linkedin_url + '"><i class="fab fa-linkedin-in"></i></a>';
                t.row.add([
                    value.name,
                    value.dept,
                    linkedin_url,
                    value.intern_category
                ]).draw(false);
            });
        });
});