var MakeShuffleDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.setPosition(top, left);
  this.step();
  this.timeBetween = timeBetweenSteps;

};

MakeShuffleDancer.prototype.step = function() {
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
};

MakeShuffleDancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
  var styleSettings = {
    top: top,
    left: left
  };
};