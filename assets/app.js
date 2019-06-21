$(document).ready(function () {

  $(".first-anim").animate({
    "left": "+=150px"
  }, "slow");
  $(".second-anim").animate({
    "left": "+=100px"
  }, "slow");
  $(".third-anim").animate({
    "left": "+=50px"
  }, "slow");

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

  // Variable that stores the favorite artist:
  var favoritelist = [];

  //This is saving artist list on Firebase
  database.ref().on("child_added", function (snapshot) {
    var savedArtist = snapshot.val();
    console.log(savedArtist.name);

    var artistbtn = $("<button>").addClass("artistBtn btn btn-default").val(savedArtist.name).text(savedArtist.name);

    var div = $("<li>").append(artistbtn);
    $("#userSearch").append(div);

  })

  $(document).on("click", ".artistBtn", function () {
    console.log(this);
    var artistInput = $(this).val();

    console.log(artistInput);
    //Youtube info for api 
    var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&q=" + artistInput +
      "&key=AIzaSyDkXdU2LudYi2Gin1FZMypNn1MCbSzcS-M";
    var queryURL2 = "https://api.songkick.com/api/3.0/search/artists.json?apikey=wuCD2ljEi5nAfdAE&query=" + artistInput



    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var searchResults = response.items[2].id.videoId;

      //Youtube player attribute adding the search results to Youtube 
      $('#player').attr("src", "https://www.youtube.com/embed/" + searchResults);

    });

    //ajax call for song kick to get artist by id 
    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function (response) {
      //   console.log(response);
      //target item artist for songkick api
      //   console.log(response.resultsPage.results.artist[0].id);
      var artistId = response.resultsPage.results.artist[0].id;
      //Songkick url to get artist id by event pulling from calendar in songkick api 
      var eventsUrl = "https://api.songkick.com/api/3.0/artists/" + artistId + "/calendar.json?apikey=wuCD2ljEi5nAfdAE"

      //ajax call to get events by artist name 
      $.ajax({
        url: eventsUrl,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        //   console.log(responsePage.results.event[0].id); //changed .id with .displayName change back if doesnt work 
        //   $("#songkickevents").append(id);
        var eventList = response.resultsPage.results.event;
        $("#songkickevents").empty();
        for (var i = 0; i < 5; i++) {
          var eventName = eventList[i];
          $("#songkickevents").append("<p>" + eventName.displayName + "</p>");
        } //changed .id with .displayName change back if doesnt work


      });


    });
  })


  // Function called when the form is submitted.
  // Function adds favorite artist to the global array.
  function addfavartist() {

    var task = document.getElementById("nameInput");
    var output = document.getElementById("userSearch");
    var message = "";

    if (task.value) {
      favoritelist.push(task.value);
      database.ref().push({name:task.value});
      message = "";
      for (var i = 0, count = favoritelist.length; i < count; i++) {
        message += '<li>' + favoritelist[i] + '</li>';
      }

      output.innerHTML = message;
    } // End of task.value IF.

    attachAjaxCall();

    // Return false to prevent submission:
    return false;

  }


  $("#task").on("click", function (event) {
    event.preventDefault();
    addfavartist();
  })

  //Making function for to set up ajax call 
  function attachAjaxCall() {

    $('li').css('cursor', 'pointer')
      .click(function () {

        //call youtube api to get json for youtube link 

        var artistInput = this.innerText;
        // debugger;
        console.log(artistInput);
        //Youtube url for api 
        var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&q=" + artistInput +
          "&key=AIzaSyDkXdU2LudYi2Gin1FZMypNn1MCbSzcS-M";
        //Song kick api url plus arist input 
        var queryURL2 = "https://api.songkick.com/api/3.0/search/artists.json?apikey=wuCD2ljEi5nAfdAE&query=" + artistInput


        // ajax call for Youtube 
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function (response) {
          //   console.log(response);
          //Our target item from the Youtube api 
          var searchResults = response.items[2].id.videoId;

          //Youtube player attribute adding the search results to Youtube 
          $('#player').attr("src", "https://www.youtube.com/embed/" + searchResults);

        });

        //ajax call for song kick to get artist by id 
        $.ajax({
          url: queryURL2,
          method: "GET",
        }).then(function (response) {
          //   console.log(response);
          //target item artist for songkick api
          //   console.log(response.resultsPage.results.artist[0].id);
          var artistId = response.resultsPage.results.artist[0].id;
          //Songkick url to get artist id by event pulling from calendar in songkick api 
          var eventsUrl = "https://api.songkick.com/api/3.0/artists/" + artistId + "/calendar.json?apikey=wuCD2ljEi5nAfdAE"

          //ajax call to get events by artist name 
          $.ajax({
            url: eventsUrl,
            method: "GET",
          }).then(function (response) {
            console.log(response);
            //   console.log(responsePage.results.event[0].id); //changed .id with .displayName change back if doesnt work 
            //   $("#songkickevents").append(id);
            var eventList = response.resultsPage.results.event;
            $("#songkickevents").empty();
            for (var i = 0; i < 5; i++) {
              var eventName = eventList[i];
              $("#songkickevents").append("<p>" + eventName.displayName + "</p>");
            } //changed .id with .displayName change back if doesnt work


          });


        });


      });
  }

});