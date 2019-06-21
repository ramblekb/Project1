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
  
        attachAjaxCall();
  
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
  
   //Making function for to set up ajax call 
      function attachAjaxCall () {
  
          $('li').css('cursor', 'pointer')
              .click(function () {
                
                  //call youtube api to get json for youtube link 
                  
                  var artistInput = this.innerText ;
                  // debugger;
                  console.log(artistInput);
                  //Youtube url for api 
                    var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&q=" + artistInput +
                       "&key=AIzaSyDkXdU2LudYi2Gin1FZMypNn1MCbSzcS-M";
                      //Song kick api url plus arist input 
                       var queryURL2 = "https://api.songkick.com/api/3.0/search/artists.json?apikey=wuCD2ljEi5nAfdAE&query=" +artistInput
                       
          
                      // ajax call for Youtube 
                      $.ajax({
                          url: queryURL,
                          method: "GET",
                      }).then(function (response) {
                    //   console.log(response);
                      //Our target item from the Youtube api 
                      var searchResults = response.items[2].id.videoId;
                  
                      //Youtube player attribute adding the search results to Youtube 
                      $('#player').attr("src","https://www.youtube.com/embed/"+searchResults);
                      
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
                      var eventsUrl = "https://api.songkick.com/api/3.0/artists/"+artistId+ "/calendar.json?apikey=wuCD2ljEi5nAfdAE"
                     
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
                          if (i%2 ===0) {
                              $("#songkickevents").attr("style", "background-color: black")
                          }
                        var eventName = eventList[i];
                        $("#songkickevents").append("<p>" + eventName.start.date + "</p>");

                        $("#songkickevents").append("<p>" + eventName.displayName + "</p>");

                      }               //changed .id with .displayName change back if doesnt work
                     
                      
                      });
                  
                      
                      });
                  
                  
          });
      }
  
  });
  