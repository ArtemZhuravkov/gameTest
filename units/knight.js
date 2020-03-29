var Knight = (function() {
    function Knight() {      
      Unit.call(this, 300, 800, 500);
      this.el.style.backgroundImage = 'url("img/knight.png")';
    }  
    Knight.prototype = Object.create(Unit.prototype);
    Knight.prototype.constructor = Knight;
    
    return Knight;
  })();