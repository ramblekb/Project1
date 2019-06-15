$(document).ready(function(){


    var queryURL = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id=codingbootcamp";
           
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
    });    

    