const {
  add,
  resetBasket,
  isFull,
  increaseBasketCapacity,
  remove,
  getBasket,
  displayPrice,
  total
} = require('../../src/basket.js')

describe('bagel basket', () => {
  beforeEach(() => {
    resetBasket()
  })

  it('can add a bagel to basket', () => {
    add('Plain')
    const basket = getBasket()

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
    add('Everything')
    const basket = getBasket()

    expect(basket).toEqual([
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
  it('should increase quantity of bagel if it is already in the basket', () => {
    add('Plain')
    add('Plain')
    const result = getBasket()

    expect(result).toEqual([
      {
        name: 'Bagel',
        variant: 'Plain',
        quantity: 2,
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

  it('should return the total of all the bagels in customer`s basket', () => {
    add('Plain')
    add('Everything')
    const result = total()
    expect(result).toEqual(1)
  })
})
