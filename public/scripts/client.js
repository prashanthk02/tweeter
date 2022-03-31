/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  const tweetData = [];

//helper functions

//to prevent xss with escape function
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//applies css to individual tweet object
const createTweetElement = function (tweet) {
  const tweets = `
  <article class="tweet">
          <header>
            <div>
              <div class="avatar">
                <img src="${tweet.user.avatars}">
                <span>${tweet.user.name}</span>
              </div>
              <span class="user-handle">${tweet.user.handle}</span>
            </div>
            <p>${escape(tweet.content.text)}</p>
          </header>
          <footer>
            <span>${jQuery.timeago(tweet.created_at)}</span>
            <div>
             <button><i class="fa-solid fa-flag"></i></button>
            <button><i class="fa-solid fa-retweet"></i></button>
            <button><i class="fa-solid fa-heart"></i></button> 
            </div>
          </footer>
        </article>
        `
        return tweets;
};

//loop through entire tweet data and appends it to the tweet box section in html
const renderTweets = function (tweetData) {
  for (let tweet of tweetData) {
   let $tweet = createTweetElement(tweet);
   $('#tweet-box').prepend($tweet);
  }
};

//to get tweets from tweets file
const loadTweets = function () {
  $.ajax("/tweets", {method: 'GET'})
    .then(data => renderTweets(data))
}

// document on ready short hand syntax
$(() => {
  $('.tweet-form').on('submit', (evt) => {
  evt.preventDefault();
  
  const input = $('#tweet-text').val();
  if (input === "" || $.trim(input).length === 0) {
    alert("Tweet can't be blank")
  } else if (input.length > 140) {
    alert("Tweet limit exceeded!");
  } else {
      $.ajax({
        type: 'POST',
        url: '/tweets',
        dataType: 'text',
        data: $('#tweet-text').serialize()
      })
      .then(() => {
        $('#tweet-text').val('');
      })
    }
    
    $.ajax("/tweets", {method: 'GET'})
    .then(data => renderTweets([data[data.length - 1]]))
  })
  loadTweets();
})