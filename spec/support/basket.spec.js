const {
  add,
  resetBasket,
  isFull,
  increaseBasketCapacity,
  remove,
  getBasket
} = require('../../src/basket.js')
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
        variant: 'Plain',
        quantity: 1
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
        variant: 'Plain',
        quantity: 1
      },
      {
        id: 2,
        name: 'Bagel',
        variant: 'Everything',
        quantity: 1
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

  // it('should remove item bagel it exists in the basket', () => {
  //   add('Plain')
  //   const result = remove('Plain')
  //   expect(result).toEqual({
  //     id: 1,
  //     name: 'Bagel',
  //     variant: 'Plain',
  //     quantity: 1
  //   })
  // })
  it('should return the basket', () => {
    const result = getBasket()
    expect(result).toEqual([])
  })
})
