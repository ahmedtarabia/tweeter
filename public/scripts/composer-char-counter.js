
// To count the number of characters entered in tweet box and change colour to red when exceeds the limit.
$(document).ready(function() { //how many charaters
  $("#tweet-text").keyup(function() { //how many charaters -> keyup
    let counter = $(this).val().length;
    if (counter <= 140) {
      $(this).parent("form").children("div").children("output").css({'color':'#656565'}).text(140 - counter);
    } else {
      $(this).parent("form").children("div").children("output").css({'color': 'red'}).text(140 - counter);
    }
  });
});




