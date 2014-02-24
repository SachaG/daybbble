Template.shot.events({
  'mouseenter': function (event) {
    $(".grid-shot a").addClass('faded'); // fade all shots
    $("a[data-id='"+this.id+"']").removeClass('faded').addClass('highlighted'); // unfade and highlight shots with the same id
    Session.set('zoomedShot', this);
    if($(event.target).offset().left > $(window).width()/2 )
      this.offset = true; 
  },
  'mouseleave': function (event) {
    $('.grid-shot a').removeClass('faded highlighted');
    Session.set('zoomedShot', null);
  }
});