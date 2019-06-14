$(document).ready(function(){


var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=band%7Cmusician&type=video&key=AIzaSyC4BfcpF2c8HeJU5ddlStqK6QeZHtdh31Q";
       
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});
});     


