const { add } = require('../../src/basket.js')
describe('bagel basket', () => {
  it('can add a bagel to basket', () => {
    const basket = add('bagel')

    expect(basket).toEqual(1)
  })
})
