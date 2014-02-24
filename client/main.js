Session.set('zoomedShot', null);
Meteor.subscribe('hours', function () {
  $('.loading').addClass('loading-hidden');
});
SHOTS_NUMBER = 12;