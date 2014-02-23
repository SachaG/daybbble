Template.zoom.helpers({
  zoomedShot: function () {
    return Session.get('zoomedShot');
  },
  offsetClass: function () {
    return this.offset ? 'offset' : '';
  }
})