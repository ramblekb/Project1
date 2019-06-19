    
$(function () {
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



    function attachAjaxCall () {

        $('li').css('cursor', 'pointer')
            .click(function () {
                //call youtube api to get json for youtube link 
                
                var artistInput = this.innerText ;
                // debugger;
                console.log(artistInput);
                
                  var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&q=" + artistInput +
                     "&key=AIzaSyDkXdU2LudYi2Gin1FZMypNn1MCbSzcS-M";
        
        
            
                    $.ajax({
                        url: queryURL,
                        method: "GET"
        
                    }).then(function (response) {
                    console.log(response);
                    var searchResults = response.items[2].id.videoId;
                    
                    $('#player').attr("src","https://www.youtube.com/embed/"+searchResults);
                    
                    
                    
                    
        
                    
                    });
                
        });
    }

});