$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;
    $.getJSON("/about/mentors/mentors.json",
        function(data) {
            $.each(data, function(key, value) {
                t.row.add([
                    value.name,
                    value.designation,
                    value.dept_name,
                    value.clg_name
                ]).draw(false);
            });
        });
});