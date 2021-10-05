$(document).ready(function() { //how many charaters
  $("#tweet-text").keypress(function() { //how many charaters -> keypress
    let counter = $(this).val().length;
    if(counter <= 140){
      $(".counter").css({'color':'#656565'}).text(140 - counter);
    } else if (counter > 140) {
      $('.counter').css({'color': 'red'}).text(140 - counter)
    }
  });
});




