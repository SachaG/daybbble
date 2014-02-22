Template.grid.helpers({
  days: function () {
    return Days.find({}, {sort: {timestamp: -1}, limit: 24});
  },
  date: function () {
    var d = new Date(this.timestamp);
    return d.getHours()+":00";
  },
  shots: function () {
    return jQuery.parseJSON(this.content).shots;
  }
})