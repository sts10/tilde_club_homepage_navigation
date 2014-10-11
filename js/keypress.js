
$(document).ready(function(){
  alert('hello');
 
  function goToKeyedURL(tilde_member_name){
    // some code to direct browser to http://tilde.club/~ + tilde_member_name
  }

  // listens for any navigation keypress activity
  $(document).keypress(function(e){
    alert('some key was pressed');
    if(e.which == 106){ // j 
      alert("you pressed j");
    } 

    if (e.keyCode == 40) {  // down?
        Navigate(1);
    }
    if(e.keyCode==38){ // up?
        Navigate(-1);
    }
  });

  // http://jsfiddle.net/MKZSE/77/

  var Navigate = function(diff) {
      displayBoxIndex += diff;
      var oBoxCollection = $(".display_box");
      if (displayBoxIndex >= oBoxCollection.length)
           displayBoxIndex = 0;
      if (displayBoxIndex < 0)
           displayBoxIndex = oBoxCollection.length - 1;
      var cssClass = "display_box_hover";
      oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
  }


});

