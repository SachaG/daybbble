Template.grid.helpers({
  hours: function () {
    return Hours.find({}, {sort: {timestamp: -1}, limit: 24});
  },
  date: function () {
    var d = new Date(this.timestamp);
    return ("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2);
  },
  shots: function () {
    return jQuery.parseJSON(this.content).shots;
  }
})

Template.grid.rendered = function () {
  $('.grid-shot a').hover(function () {

    var shotID = $(this).attr('data-id'),
        shotsSelector = "a[data-id='"+shotID+"']";

    $(".grid-shot a").addClass('faded');
    $(shotsSelector).removeClass('faded').addClass('highlighted');

  }, function(){

    $('.grid-shot a').removeClass('faded highlighted');

  });
}