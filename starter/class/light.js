const { Item } = require('./../class/item');

class Light extends Item {
    constructor(name, description) {
        super(name, description);
    }
}

module.exports = Light;
