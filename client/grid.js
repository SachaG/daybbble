Template.grid.helpers({
  days: function () {
    return Days.find();
  },
  shots: function () {
    return jQuery.parseJSON(this.content).shots;
  }
})