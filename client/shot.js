Template.shot.rendered = function () {
  var data = this.data;
  $(this.firstNode).hover(function () {
    if($(this).offset().left > $(window).width()/2 )
      data.offset = true;
    Session.set('zoomedShot', data);
  }, function () {
    Session.set('zoomedShot', null);
  });
}