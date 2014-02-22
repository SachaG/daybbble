var queryAPI = function () {
  HTTP.get('http://api.dribbble.com/shots/popular?page=1&per_page=24', function(error, result){
    console.log(error, result)
    if(!!result){
      result.timestamp = new Date().getTime();
      Days.insert(result);
    }
  });
}

Meteor.methods({
  queryAPI: function () {
    queryAPI();
  }
})

Meteor.setInterval(function(){
  // queryAPI();
}, 3600000);