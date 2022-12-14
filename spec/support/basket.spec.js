const { add } = require('../../src/basket.js')
describe('bagel basket', () => {
  it('test', () => {
    const basket = add('bagel')

    expect(basket).toEqual('bagel')
  })
})
