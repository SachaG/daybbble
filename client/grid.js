Template.grid.helpers({
  days: function () {
    return Days.find({}, {sort: {timestamp: -1}, limit: 24});
  },
  date: function () {
    var d = new Date(this.timestamp);
    return d.getHours()+":"+d.getMinutes();
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