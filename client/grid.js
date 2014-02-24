Template.grid.helpers({
  hours: function () {
    return Hours.find({}, {sort: {timestamp: -1}, limit: 24});
  },
  date: function () {
    var d = new Date(this.timestamp);
    return ("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2);
  },
  likesPerHour: function () {
    var createdAt= new Date(this.created_at);
    var now = new Date();
    var diff = (now.getTime() - createdAt.getTime())/3600000;
    return Math.round(parseInt(this.likes_count)/diff);
  },
  shots: function () {
    return _.first(jQuery.parseJSON(this.content).shots, SHOTS_NUMBER);
  }
});