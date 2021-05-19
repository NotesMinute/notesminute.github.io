// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
}

// initialize AOS
AOS.init();


$("#view").click(function() {
    $("#topic-details").toggle();
    $("#topic-details1").toggle();
});

$("#topic-details").css("display", "block");
$("#topic-details1").css("display", "none");