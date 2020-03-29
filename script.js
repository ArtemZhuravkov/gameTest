var war = new Warrior();
var knight = new Knight();
var arch = new Archer();
var wr = new WarriorList(document.querySelector('.list_of_warriors'), 3, 1000);
wr.fill([Warrior, Archer, Knight]);


console.log(wr);
