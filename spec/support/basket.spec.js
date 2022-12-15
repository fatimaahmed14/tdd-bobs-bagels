const { add, resetBasket, isFull } = require('../../src/basket.js')
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
  it('should return true is basket has less than 5 bagels', () => {
    add('Plain')
    add('Plain')
    const result = isFull()
    expect(result).toBeTrue()
  })

  it('should return false is basket has more than 5 bagels', () => {
    add('Plain')
    add('Plain')
    add('Plain')
    add('Plain')
    add('Plain')
    add('Plain')
    const result = isFull()
    expect(result).toBeFalse()
  })
})
