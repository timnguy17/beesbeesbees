var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';


};


Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

//can also inhert methods manually
Bee.prototype.eat = function() {
  Grub.eat;
};
