var makeWeirdDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps );

  this.$node = $('<img class="weird" src="https://cdn.shopify.com/s/files/1/0051/4802/products/stickers_octocat_600x600.png?v=1520903827">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = makeDancer.prototype.step;

};

makeWeirdDancer.prototype = Object.create(makeDancer.prototype)
makeWeirdDancer.prototype.constructor = makeWeirdDancer;
 
makeWeirdDancer.prototype.step = function(){
  this.oldStep();


  var pos = this.$node.position();
  // console.log(this.timeBetweenSteps);
  var body = {
    height : $("body").height() - 100,
    width : $("body").width() - 200
  }

  this.$node.animate({left: `${Math.random() * body.width }px` , top: `${Math.random() * body.height }px`});
}