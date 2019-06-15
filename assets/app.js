
$(document).ready(function () {
    var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=5&q=band%7Cmusician&type=video&key=AIzaSyC4BfcpF2c8HeJU5ddlStqK6QeZHtdh31Q";
      
$.ajax({
   url: queryURL,
   method: "GET"
}).then(function(response) {
   console.log(response);
});
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
