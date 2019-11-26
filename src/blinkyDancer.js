var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps );

  this.$node = $('<img class="dancer" src="https://haningtonbrothers.xyz/image/57018-full_skeleton-sn-walk-1-b-gif.gif">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.w = 1;
  this.h = 1.5;
  this.size = false;
  this.oldStep = makeDancer.prototype.step;
 // setTimeout(this.step.bind(this),timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
 
makeBlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
  if(this.size === false) {
  	this.h++;
  	this.w++;
  } else {
  	this.h--;
  	this.w--;
  }
  
  if (this.h <= 1) this.size = false;
  if (this.h >= 20) this.size = true;
  this.$node.css({width: this.w + 'em', height: this.h + 'em'})
}


