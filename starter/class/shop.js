const { Room } = require('./../class/room');
const Light = require('./light');

class Shop extends Room {
    constructor(name, description) {
        super(name, description);
        this.items = [new Light('light', 'a simple light source')];
    }

    sell(itemName) {
        let item = this.getItemByName(itemName);
        if (!item) {
            console.log('Sorry Item not available at this time');
        } else {
            let index = this.items.indexOf(item);

            if (index !== -1) {
                this.items.splice(index, 1);
            }
        }
    }
}
module.exports = Shop;
