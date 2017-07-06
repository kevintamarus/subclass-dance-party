var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="http://orig02.deviantart.net/d4f1/f/2015/129/1/4/pacman___blinky___red_ghost_by_charlychive-d8sqkcj.gif"</span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = this.step;
  // var oldStep = this.step;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// MakeBlinkyDancer.prototype.oldStep =

MakeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step

  MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
