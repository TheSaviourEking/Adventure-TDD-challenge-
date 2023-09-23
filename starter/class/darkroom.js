const { Room } = require('../class/room');
const Light = require('./light');

class DarkRoom extends Room {
    constructor(name, description) {
        super(name, description);
    }

    checkLight() {
        if (this.getItemByName('light')) {
            this.description = 'a room';
        }
    }


}

// let darkRoom = new DarkRoom('dark', 'dark room');
// let light = new Light('light', "a simple light source");

// darkRoom.items.push(light);
// console.log(darkRoom.items);
// console.log(darkRoom.checkLight())
// console.log(darkRoom);
module.exports = DarkRoom;
