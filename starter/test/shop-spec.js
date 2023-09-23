const { expect } = require('chai');
const Shop = require('./../class/shop');
let { Room } = require('./../class/room');
let { Player } = require('./../class/player');

describe('Shop', function () {
    let name = 'A shop';
    let description = 'A test Shop';
    let shop, room;

    beforeEach(function () {
        shop = new Shop(name, description);
        room = new Room('room', 'A test room');
    });

    it('should inherit from Room', function () {
        expect(shop).to.be.instanceOf(Room)
    })

    it('should have items in store on initialization', function () {
        expect(shop.items).to.not.be.empty;
    })

    describe('sell()', function () {
        it('should sell items to players', function () {
            let player = new Player('Saviour', room);
        })
    })
})
