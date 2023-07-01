// getting a random biblical verse
(function() {
    $(document ).ready(function() {
        getVerse();
    });
  
    $(".refreshbtn").click(function(){
      getVerse();
    });
  
    var getVerse = function() {
        $.ajax({
          url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
          crossDomain: true,
          dataType: 'jsonp',
          success: function(result){
             $(".verse-text")
               .html(result[0].text);
             $(".verse-reference")
                .html(result[0].bookname + ' ' + result[0].chapter +':' + result[0].verse)
          }
        });
    }
  })();

  // to skip the verses are that are too long
 
  
  // Call adjustFontSize on window resize
  