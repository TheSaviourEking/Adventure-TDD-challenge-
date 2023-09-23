const { expect } = require('chai');
const Light = require('../class/light.js');

const { Item } = require('../class/item.js');

describe('Light', function () {
    let name = 'light';
    let description = 'A simple light source';
    let light;

    beforeEach(function () {
        light = new Light(name, description);
    })

    it('should inherit from Item', function () {
        expect(light).to.be.instanceOf(Item);
    })
})
