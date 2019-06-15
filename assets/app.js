

$(document).ready(function () {
    // Variable that stores the favorite artist:
    var favoritelist = [];


    // Function called when the form is submitted.
    // Function adds favorite artist to the global array.
    function addfavartist() {

        var task = document.getElementById("nameInput");
        var output = document.getElementById("userSearch");
        var message = "";

        if (task.value) {
            favoritelist.push(task.value);
            message = "";
            for (var i = 0, count = favoritelist.length; i < count; i++) {
                message += '<li>' + favoritelist[i] + '</li>';
            }

            output.innerHTML = message;
        } // End of task.value IF.

        // Return false to prevent submission:
        return false;

    }

    function removeTask() {

        alert("Button Clicked!");

    }

    $("#task").on("click", function (event) {
        event.preventDefault();
        addfavartist();
    })
}
)
$(function () {
    $('li').css('cursor', 'pointer')

        .click(function () {
            window.location = $('a', this).attr('href');
            return false;
        });
});

$("#form_group").reset();






















//document.getElementById("nameInput").onclick  = function() {

    //var favoritelist = document.createElement("Li");
    //var text = document.getElementById("userSearch").value; 
    //var textnode=document.createTextNode(text);
    //node.appendChild(textnode);
    //document.getElementById("userSearch").appendChild(node);




//var userSearch = "";
//$(document).ready(function() {
//$("#buttonA").click(function() {
    //userSearch = document.getElementById("userSearch").value;
    //console.log(userSearch);

  //});
  //console.log(userSearch);
//});