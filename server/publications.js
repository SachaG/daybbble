Meteor.publish('hours', function() {
  return Hours.find({}, {sort: {timestamp: -1}, limit: 24})
});