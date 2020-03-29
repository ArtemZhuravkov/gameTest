var Archer = (function() {
    function Archer() {      
      Unit.call(this, 200, 250, 300);
      this.el.style.backgroundImage = 'url("img/archer.png")';
    }  
    Archer.prototype = Object.create(Unit.prototype);
    Archer.prototype.constructor = Archer;
    
    return Archer;
  })();