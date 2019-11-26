// Creates and returns a new dancer object that can step

var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  var context = this;
  this.top =top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  setTimeout(context.step.bind(context),timeBetweenSteps);
  setTimeout(context.setPosition.bind(context),timeBetweenSteps);

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(context.step.bind(context), context.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var context = this;

  top = top || context.top;
  left = left || context.left;

  var styleSettings = {
    top: top,
    left: left
  };
  context.$node.css(styleSettings);
  };




