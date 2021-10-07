/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Code runs when the DOM is ready.
$(document).ready(function() {
// fetch the tweets and render them else show the error.
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        console.log("data:", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      }
    });
  };
  loadTweets();

  // Function that creates the tweets
  const createTweetElement = function(data) {
    //take in tweet object
    //returns tweet article element
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
    
    <p>${(escape(data.content.text)).replace(/%20/g, " ").replace(/%3F/g, "?").replace(/%21/g, "!").replace(/%2C/g,",")}</p>
  
    <footer>
      <div>${timeago.format(new Date())}</div>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-repeat"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>`);
  
    return $tweet;
  };
  // This function loops over each tweet in an array of tweet objects and prepends each tweet in the tweetContainer by calling the createTweetElement function on it. 
  const renderTweets = function(tweets) {
    const tweetContainer = $("#tweets-container");
    tweetContainer.empty();
    // loop over an array of tweets
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      tweetContainer.prepend($tweet);
    }
  };

  // Listens for the tweet button and depending on scenario either tweets or shows an error due to no input or exceeding character limit. 
  const form = $(".new-form");
  form.on("submit", function(event) {
    // To avoid browser refreshing
    event.preventDefault();

    const serializedData = $(this).serialize();
    
    // Variable declaration
    let textLength = $(this).children("#tweet-text").val().length;
    let textWithSpace = $(this).children("#tweet-text").val();
    
    // Warns the user to enter text when text area is empty. No post requests.
    if (textLength === 0 || textWithSpace.trim() === '') {
      $("#error1").text('Please input text! 🛑');
      $("#error-message").slideDown();
      
    // Warns user that the character limit exceeded. No post requests.
    } else if (textLength > 140) {
      $("#error1").text('Text exceeds the limit! 🛑');
      $("#error-message").slideDown();

    // If within the limit, hides any existing errors and posts a request. 
    } else {
      $("#error-message").hide();
      $.post('/tweets', serializedData, (response) => {
        console.log(response);
        loadTweets();
      });
    }
  });

  // Just a nice addition to remove error when starting to type when between 0 and 140 and removes error when below the character limit. 
  $("#tweet-text").on("input", function(event) {
    event.preventDefault();
    let textLength = $(this).val().length;
    if (textLength > 0 && textLength <= 140) {
      $("#error-message").hide();
    } else if (textLength > 140) {
      $("#error1").text('Text exceeds the limit! 🛑');
      $("#error-message").slideDown();
    }
  });


  // Hardcoded data for testing and to show an initial information when visiting the page. 
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
  ];

  const $tweet = createTweetElement(data[0]);
  $('#tweets-container').append($tweet); // to add it
  renderTweets(data);

});


