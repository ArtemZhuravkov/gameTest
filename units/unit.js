var Unit = (function() {
    function Unit(baseDamage, health, coast) {
      this.el = document.createElement('div');
      this.el.classList.add('list_unit');                   
      this.damage = baseDamage;
      this.maxHealth = this.health = health;
      this.coast = coast;
      this.el.style.backgroundRepeat = 'no-repeat';
      this.el.style.backgroundSize = '70%';
      this.el.style.backgroundPosition = 'center';
    }
  
    Unit.prototype.attack = function() {
      console.log('Attack', this);
    };
  
    Unit.prototype.render = function() {
      this.el.onmouseover = function(){
        this.classList.add('list_unit_border');        
      };
      this.el.onmouseout = function(){
        this.classList.remove('list_unit_border');
      };
      var unitCoast = document.createElement('span');
      unitCoast.classList.add('coast_style');
      unitCoast.append('coast: ' + this.coast);
      this.el.append(unitCoast);
      var self = this;
      
      return this.el;
    };    
    
    return Unit;
  })();