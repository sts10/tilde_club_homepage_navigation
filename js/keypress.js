
$(document).ready(function(){
 
  function goToKeyedURL(tilde_member_name){
    // some code to direct browser to http://tilde.club/~ + tilde_member_name
  }

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;
  var addressValue = '';

  // listens for any navigation keypress activity
  $(document).keypress(function(e){

    if (e.keyCode == 106) {  // j
        Navigate(1);
    }
    if(e.keyCode==107){ // k
        Navigate(-1);
    }

    if(e.keyCode==13){ // carriage return
        // alert("would open link_index of " + link_index);
        // alert("would navigate to " + addressValue)
        window.location.href = addressValue;
    }    
  });

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;

  var Navigate = function(diff) {
      link_index += diff;
      var link_list = $("a");
      if (link_index >= link_list.length)
           link_index = 0;
      if (link_index < 0)
           link_index = link_list.length - 1;
      var cssClass = "selected_link";
      link_list.removeClass(cssClass).eq(link_index).addClass(cssClass);

      $('html, body').animate({
          scrollTop: $(".selected_link").offset().top -300
      }, 20);

      addressValue = $(".selected_link").attr("href");
      // return(addressValue);
  }

  function makeLinkArray(){

  }


});

