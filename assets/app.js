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

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_4k2OJ7rzvz31qJ9fsiUWQtab8eqFJ8U",
    authDomain: "regular-project-ffb1f.firebaseapp.com",
    databaseURL: "https://regular-project-ffb1f.firebaseio.com",
    projectId: "regular-project-ffb1f",
    storageBucket: "regular-project-ffb1f.appspot.com",
    messagingSenderId: "241952960961",
    appId: "1:241952960961:web:bf48ab13524a7e2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()

  $("#task").on("click", function(event) {
      event.preventDefault();

      var artistName = $("#nameInput").val().trim();
              
      var artistArray = [];

      $(artistArray).push(artistArray)

      database.ref().push(artistArray);

      console.log(artistArray);

  });
  database.ref().on("childAdded", function(snapshot){
  
})

//start of bandsintown function for api 
$.ajax('https://api.bandsintown.com/artists/Roosevelt/events.json', {
  data: {
    api_version: '2.0',
    //date: '2014-01-01,2016-12-31',
    app_id: 'ENTER_APPID_HERE'
  },
  dataType: 'jsonp',
  jsonpCallback: 'createPastConcertsList',
  crossDomain: true
})

window.createPastConcertsList = function (res) {
  var concerts = res.sort(function (a, b) {
    return new Date(b.datetime) - new Date(a.datetime)
  })

  var $container = $("card-body")

  $('<h4 class="title">All Concerts</h4>').appendTo("card-Body")
  var $table = $('<table class="list" />')
  $table.append('<tr><th></th><th>Date</th><th>Venue</th><th>Location</th></tr>')

  $.each(concerts, function (index, concert) {
    var date = concert.datetime.match(/(\d\d\d\d)-(\d\d)-(\d\d)/)
    var dateString = date[3] + '.' + date[2] + '.' + date[1]
    var $tr = $('<tr />')
    $tr.append($('<td class="spacer" />'))
    $tr.append($('<td class="date" />').text(dateString))
    $tr.append($('<td class="venue" />').text(concert.venue.name))
    $tr.append($('<td class="location" />').text(concert.venue.city + ', ' + concert.venue.country))
    $table.append($tr)
  })
}




















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

