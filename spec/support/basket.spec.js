const {
  add,
  basketReset,
  remove,
  returnBasket,
  totalBagelPrice,
  capacity
} = require('../../src/basket.js')

describe('basket ', () => {
  beforeEach(() => {
    basketReset()
  })

  it('adds a bagel to the basket', () => {
    const bagel = add('BGLO')

    expect(bagel).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    })
  })

  it('returns false if the bagel is not in the basket', () => {
    const removed = remove('BGLO')

    expect(removed).toBeFalse()
  })

  it('removea a specified bagel from basket', () => {
    add('BGLO')
    const removed = remove('BGLO')
    const basket = returnBasket()

    expect(removed).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    })
    expect(basket).toEqual([])
  })

  it('returns the total price of all bagels in a basket', () => {
    add('BGLO')
    add('BGLO')
    add('BGLP')

    const totalPrice = totalBagelPrice()
    expect(totalPrice).toBe(1.37)
  })

  it('returns false when basket is at its max capacity', () => {
    capacity(3)
    add('BGLO')
    add('BGLD')
    add('BGLE')
    const result = add('BGLP')

    expect(result).toBeFalse()
  })
  it('updates the quantity of bagels in the basket when bagel is added', () => {
    add('BGLO')
    const bagel = add('BGLO')

    expect(bagel).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 2
    })

    expect(returnBasket()).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 2
      }
    ])
  })
})
