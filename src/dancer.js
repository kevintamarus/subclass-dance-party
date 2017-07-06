// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="https://68.media.tumblr.com/4c2a7f80f9d2ef93f56d26fbcbd7d1cc/tumblr_nhaqorj6Pm1tv9oaco1_500.gif"</span>');
  this.setPosition(top, left);
  this.step();
  this.timeBetween = timeBetweenSteps;

};

MakeDancer.prototype.step = function() {
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetween);
};

MakeDancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUpLeft = function(top, left) {
  var styleSettings = {
    top: top,
    left: 60,
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUpRight = function(top, left) {
  var styleSettings = {
    top: top,
    left: 1200,
  };
  this.$node.css(styleSettings);
};
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
