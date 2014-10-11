
$(document).ready(function(){
 
  function goToKeyedURL(tilde_member_name){
    // some code to direct browser to http://tilde.club/~ + tilde_member_name
  }

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;

  // listens for any navigation keypress activity
  $(document).keypress(function(e){
    // alert('some key was pressed');
    if(e.which == 106){ // j 
      // alert("you pressed j");
    } 

    if (e.keyCode == 106) {  // j
        Navigate(1);
    }
    if(e.keyCode==107){ // k
        Navigate(-1);
    }

    if(e.keyCode==13){ // carriage return
        alert("would open link_index of " + link_index);

    }    
  });

  // http://jsfiddle.net/MKZSE/77/

  var link_index = -1;

  var Navigate = function(diff) {
      link_index += diff;
      var link_list = $("li a");
      if (link_index >= link_list.length)
           link_index = 0;
      if (link_index < 0)
           link_index = link_list.length - 1;
      var cssClass = "selected_link";
      link_list.removeClass(cssClass).eq(link_index).addClass(cssClass);

      var addressValue = $(".selected_link").attr("href");
      alert(addressValue);
  }

  function makeLinkArray(){

  }


});

