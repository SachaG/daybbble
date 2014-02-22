Meteor.publish('days', function() {
  return Days.find({}, {sort: {timestamp: -1}, limit: 24})
});