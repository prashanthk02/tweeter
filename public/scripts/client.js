/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  const tweetData = [
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
    },
{
  "user": {
    "name": "Newton3",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac3"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}
];

//helper functions
//1.applies css to individual tweet object
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
            <p>${tweet.content.text}</p>
          </header>
          <footer>
            <span>${tweet.created_at} ago</span>
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

//2.loop through entire tweet data and appends it to the tweet box section in html
const renderTweets = function (tweetData) {
  for (let tweet of tweetData) {
   let $tweet = createTweetElement(tweet);
   $('#tweet-box').append($tweet);
  }
};

// document on ready short hand syntax
$(() => {
  renderTweets(tweetData);
})