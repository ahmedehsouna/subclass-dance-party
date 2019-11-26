var makeXDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps );

  this.$node = $('<img class="x" src="https://media.giphy.com/media/3oKIP9EDlZKKFX74S4/giphy.gif">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.start = false
  this.oldStep = makeDancer.prototype.step;
 // setTimeout(this.step.bind(this),timeBetweenSteps);
};

makeXDancer.prototype = Object.create(makeDancer.prototype)
makeXDancer.prototype.constructor = makeXDancer;
 
makeXDancer.prototype.step = function(){
  this.oldStep();
  var pos = this.$node.position();
  console.log(this.timeBetweenSteps);
  if ($("body").width() - 200 <= pos.left) {
  	this.start = true;
  	this.$node.addClass('rotate');
  }

  if (0 >= pos.left) {
  	this.start = false;
  	this.$node.removeClass('rotate');
  }

  if (this.start) {
  	this.$node.animate({left: `${pos.left - this.timeBetweenSteps}px`});
  } else {
  	this.$node.animate({left: `${pos.left + this.timeBetweenSteps}px`});
  }
  console.log(pos)
  

}