var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.color;
  this.job = 'make honey';
  this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
HoneyMakerBee.prototype.constructor = HoneyMakerBee;