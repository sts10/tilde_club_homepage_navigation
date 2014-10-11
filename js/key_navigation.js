
$(document).ready(function(){

  var link_index = -1;
  var addressValue = '';

  // listens for any navigation keypress activity
  $(document).keydown(function(e){

    // if all text boxes are out of focus...
    if ($("input").is(':focus') == false && $("textarea").is(':focus') == false) {

      switch(e.which) {

        // code look-up: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

        case 38: // up
        case 75: // k
        case 80: // p
          Navigate(-1);
        break;

        case 40: // down
        case 74: // j
        case 78: // n
          Navigate(1);
        break;

        case 13: // enter/return/carriage return
          window.location.href = addressValue;
        break; 

        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    }
  });

  // http://jsfiddle.net/MKZSE/77/
 

  var Navigate = function(diff) {
      link_index += diff;
      var link_list = $("a");
      if (link_index >= link_list.length){
           link_index = 0;
      }
      if (link_index < 0){
           link_index = link_list.length - 1;
      }

      // apply css class to selected link, and remove it from all other links
      var cssClass = "selected_link";
      link_list.removeClass(cssClass).eq(link_index).addClass(cssClass);

      // scroll body to the selected link
      $('html, body').animate({
          scrollTop: $(".selected_link").offset().top -300
      }, 20);

      // set global variable addressVariable to the address of the selected link
      addressValue = $(".selected_link").attr("href");
  };

});

