var Warrior = (function() {
    function Warrior() {      
      Unit.call(this, 100, 500, 250);
      this.el.style.backgroundImage = 'url("img/warrior.png")';
      this.el.style.backgroundSize = '55%';
    }  
    Warrior.prototype = Object.create(Unit.prototype);
    Warrior.prototype.constructor = Warrior;

    return Warrior;
  })();