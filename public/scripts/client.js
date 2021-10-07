/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {




  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        console.log("data:", tweets)
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`)
      }
    })
  }
  loadTweets()

  const createTweetElement = function(data) {
    //take in tweet object? 
    //returns tweet article element
    // if (data.content.text !== '' || data.content.text !== null || data.content.text.length <= 140 ) {
      const $tweet = $(`<article class="each-tweet">
    <header class="tweet-header">
      <div>
        <img src=${data.user.avatars} alt="">
        <p>${data.user.name}</p>
      </div>
      <div>
        <p>${data.user.handle}</p>
      </div>
    </header>
    
    <p>${escape(data.content.text)}</p>
  
    <footer>
      <div>${timeago.format(new Date())}</div>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-repeat"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>`);
  
    return $tweet
  }
    // } else {
    //  alert("Cannot tweet due to exceeding max / empty text.")
    // }
    
  const renderTweets = function(tweets){
    const tweetContainer = $("#tweets-container");
    tweetContainer.empty();

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet)
      tweetContainer.prepend($tweet)
    }
  }

  const form = $(".new-form");
  form.on("submit", function(event) {
    event.preventDefault();
    console.log('form was submitted');

    const serializedData = $(this).serialize();
    
    
    let textLength = $(this).children("#tweet-text").val().length
    let textWithSpace = $(this).children("#tweet-text").val()
    console.log(textLength)
    if(textLength === 0 || textWithSpace.trim() === '') {
      const error = `<p id="error1">Please input text! 🛑 </p>`
      
      $("#error-message").append(error)
      $("#error-message").slideDown()
    } else if (textLength > 140 ) {
      const error = `<p id="error2">Text exceeds the limit! 🛑 </p>`
      $("#error-message").append(error)
      $("#error-message").slideDown()
    } else {
      $("#error-message").hide()
      $.post('/tweets', serializedData, (response) => {
        console.log(response);
  
        loadTweets()
      })
    }
    
    
  })


  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const $tweet = createTweetElement(data[0]);

  // Test / driver code (temporary)
  console.log("It is working",$tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it


  renderTweets(data);

})


