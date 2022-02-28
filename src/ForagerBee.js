var ForagerBee = function() {

  //invoke the superclass constructor (Bee) on the constructor (ForageBee) then use .call to invoke constrctor as a method of the obj
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];


};

//allows properties to be inherited, but will remove method to construct new subclasses
ForagerBee.prototype = Object.create(Grub.prototype);
//in order to put put functionality to add subclasses back...set the constructor prototype onto itself
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};


