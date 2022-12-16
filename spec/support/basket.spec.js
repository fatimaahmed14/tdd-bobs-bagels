const {
  add,
  resetBasket,
  isFull,
  increaseBasketCapacity,
  remove,
  getBasket,
  displayPrice
} = require('../../src/basket.js')
describe('bagel basket', () => {
  beforeEach(() => {
    resetBasket()
  })

  it('can add a bagel to basket', () => {
    const basket = add('Plain')

    expect(basket).toEqual([
      {
        name: 'Bagel',
        variant: 'Plain',
        quantity: 1,
        price: 0.5
      }
    ])
  })
  it('can add multiple bagels to basket', () => {
    add('Plain')

    const bagelReport = add('Everything')

    expect(bagelReport).toEqual([
      {
        name: 'Bagel',
        variant: 'Plain',
        quantity: 1,
        price: 0.5
      },
      {
        name: 'Bagel',
        variant: 'Everything',
        quantity: 1,
        price: 0.5
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

  it('should allow manager to increase max basket capacity ', () => {
    increaseBasketCapacity(2)
    add('Plain')
    add('Plain')
    add('Plain')
    const result = isFull()
    expect(result).toBeFalse()
  })

  it('should return true if item to remove is in basket', () => {
    add('Plain')
    const result = remove('Everything')
    expect(result).toBeFalse()
  })

  it('should remove item bagel if it exists in the basket', () => {
    add('Plain')
    add('Everything')
    remove('Plain')
    const result = getBasket()
    expect(result).toEqual([
      {
        name: 'Bagel',
        variant: 'Everything',
        quantity: 1,
        price: 0.5
      }
    ])
  })
  it('should return the basket', () => {
    const result = getBasket()
    expect(result).toEqual([])
  })
  it('should return price of bagel', () => {
    add('Plain')
    const result = displayPrice('Plain')
    expect(result).toEqual(0.5)
  })
})
