const { add, resetBasket } = require('../../src/basket.js')
describe('bagel basket', () => {
  beforeEach(() => {
    resetBasket()
  })

  it('can add a bagel to basket', () => {
    const basket = add('Plain')

    expect(basket).toEqual([
      {
        id: 1,
        name: 'Bagel',
        variant: 'Plain'
      }
    ])
  })
  it('can add multiple bagels to basket', () => {
    add('Plain')

    const bagelReport = add('Everything')

    expect(bagelReport).toEqual([
      {
        id: 1,
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        id: 2,
        name: 'Bagel',
        variant: 'Everything'
      }
    ])
  })
})
