$(document).ready(function() {
  $("textarea").on('input', function() {
    let inputLength = $(this).val().length;
    let remainingCount = 140 - inputLength;
    const counter = $(this).parent().children().children(".counter");
    counter.text(remainingCount);
    if (remainingCount < 0) {
      counter.addClass("negative");
    } else {
      counter.removeClass("negative")
    }
  })
});