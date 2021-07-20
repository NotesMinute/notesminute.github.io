// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
let queryparam = "search?q="

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    let passArray = [];
    suggestions.sort();
    if (userData) {

        icon.onclick = () => {
            // webLink = "https://www.google.com/search?q=" + userData;
            // webLink = "https://www.notesminute.com/404/";
            var webLink = "https://www.notesminute.com/search/?search=" + encodeURIComponent($("#txtName").val()) + "&list=" + encodeURIComponent(passArray);
            window.location.href = webLink;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }

        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars

            // return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            return data.toLocaleLowerCase().match(userData.toLocaleLowerCase());
        });

        //for passing data
        passArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data;

        });

        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag

            return data = '<li id="listName">' + data + '</li>';

        });

        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = "https://www.notesminute.com/topics/" + selectData + '/?search=' + selectData;
        // var webLink = "http://127.0.0.1:8887/search/?search=" + encodeURIComponent($("#txtName").val()) + "&list=" + encodeURIComponent(passArray);
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;

    if (!list.length) {
        userValue = inputBox.value;
        // listData = '<li><small>No Results Found..</small></li>';
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}




$(document).ready(function() {
    $.getJSON("/notes/notes.json",
        function(data) {
            var product = '';
            let emptyArray = [];
            $.each(data, function(key, value) {

                // product += '<div class="col-lg-6 col-sm-6 text-center">'
                // product += '<div class="mt-5 mr-2 containers">'
                // product += '<h4 class="text-center">' + value.product_name + '</h4>'
                // product += '<hr class="divider my-4" />'
                // product += '<a target="_blank" href="' + value.img + '">'
                // product += '<img class="img-thumbnail edge work-shop" style="height:400px;" src="' + value.img + '">'
                // product += '</a>'
                // product += '<p class="text-center mt-3">'
                // product += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">View Details</a></p>'
                // product += '</div>'
                // product += '</div>'

            });
            // $('#product-container').append(product);
        });
});