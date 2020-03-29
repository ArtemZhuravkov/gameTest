var WarriorList = (function() {
    function WarriorList(element, size, money) {
      this.element = element; 
      this.size = size;
      this.money = money;     
      this.area = new Array; 
      this.amountOfWarriors = 3;  
      this.render();  
    }  
   WarriorList.prototype.fill = function(warArr) {
       var self = this;                    
       Array(this.amountOfWarriors)
       .fill(1)
       .forEach(function() {        
        self.area[self.area.length] = new warArr[random(0, warArr.length)]();              
       });  
       this.render();     
   };
   WarriorList.prototype.render = function() {
      var warList = document.querySelector('.list_of_warriors');
      var moneyCell = document.createElement('div');
      moneyCell.classList.add('money_cell');
      moneyCell.append('Money: ' + this.money);  
      var self = this;                                      
      this.area.forEach(function(el){                                
        var warListItem = document.createElement('div');
        var structure = el.render();       
        warListItem.classList.add('list_of_warriors_item');
        warListItem.append(structure);
        warList.appendChild(warListItem); 
        warList.append(moneyCell); 
        
        structure.onclick = function(){ 
          var money = self.money;
          var result = money - el.coast;
          console.log(result);  
          return moneyCell.innerHTML = 'Money: ' + result;     //остановился тут
                
        }                             
      }); 
                  
   };
   
    return WarriorList;
  })();