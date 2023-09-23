const { expect } = require('chai');
const DarkRoom = require('../class/darkroom');
const { Room } = require('../class/room');
let Light = require('./../class/light')

describe('DarkRoom', function () {
    let darkRoom;
    let name = 'Dark Room';
    let description = "You cannot see anything";

    beforeEach(function () {
        darkRoom = new DarkRoom(name, description);
    })

    it('should inherit from room', function () {
        expect(darkRoom).to.be.instanceOf(Room);
    });

    it('should have the right name and description on initialization', function () {
        expect(darkRoom.name).to.equal(name);
        expect(darkRoom.description).to.equal(description);
    });

    it('should have a different description if light in room or being held', function () {
        let light = new Light('light', 'a light source');

        expect(darkRoom.description).to.equal(description);

        darkRoom.items.push(light);
        darkRoom.checkLight();

        expect(darkRoom.description).to.equal('a room');
    })
})
