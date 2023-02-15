const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(23)
        expect(bag.weight).toBe(23)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    });

    test('throws error when weight exceeds max', () => {

        expect(() => new Bag(30)).toThrow('too heavy')
    })
})