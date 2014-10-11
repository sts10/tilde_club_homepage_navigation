
$(document).ready(function(){
 
  function goToKeyedURL(tilde_member_name){
    // some code to direct browser to http://tilde.club/~ + tilde_member_name
  }

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;
  var addressValue = '';

  // listens for any navigation keypress activity
  $(document).keydown(function(e){

    switch(e.which) {
            case 37: // left
            break;

            case 38: // up
            case 75: // k
              Navigate(-1);
            break;

            case 39: // right
            break;

            case 40: // down
            case 74: // j
              Navigate(1);
            break;

            case 13: // carriage return
              window.location.href = addressValue;
            break; 

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;

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
      // return(addressValue);
  }

  function makeLinkArray(){

  }


});

