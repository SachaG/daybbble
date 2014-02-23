Template.legend.helpers({
  positions: function () {
    var a = Array(SHOTS_NUMBER)
    for(var i=1; i<=SHOTS_NUMBER; i++){
      a[i] = i;
    }
    return a;
  }
})