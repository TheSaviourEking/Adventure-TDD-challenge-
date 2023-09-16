// const { Room } = require('./room');
// const { Item } = require('./item');

class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.health = 100;
    this.strength = 10;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    // Fill this in
    this.currentRoom.items.push(...this.items);
    this.currentRoom = null;
  }

}

// let room = new Room("Test Room", "A test room");
// let item = new Item("rock", "just a simple rock");
// let character = new Character('Character', 'an ordinary character', room);
// character.items.push(item);

// console.log(character.currentRoom);
// console.log(room.items.length);
// console.log(character.health);
// character.applyDamage(100);
// console.log(character.health);
// console.log(room.items[0]);
// console.log('--------------------------------------------------');
// console.log(character.currentRoom);
// console.log(room.items.length);
// console.log(room.items[0]);
module.exports = {
  Character,
};
