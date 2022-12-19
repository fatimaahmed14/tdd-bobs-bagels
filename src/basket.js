// const data = require('../inventory.json')
// const { inventory } = data
// ^ need to implement real data + bob's actual bagels

const Basket = []
let capacity = 5

function getBasket() {
  return Basket
}

function add(variant) {
  const bagel = {
    name: 'Bagel',
    variant,
    quantity: 1,
    price: 0.5
  }
  const found = Basket.find((item) => item.variant === bagel.variant)

  if (found) {
    found.quantity += 1
    return Basket.push(found)
  }

  return Basket.push(bagel)
}

// need to increase the quantity every time a bagel of the same sku is added
// need to use find() then increase quantity property by one is it already exists
// if it doesnt exist push it in the basket
// const found = Basket.find((item) => item.variant === bagel)

// if (!found) {
//   return Basket.push(bagel)
// }
// found.quantity += 1
//         return found

function resetBasket() {
  Basket.splice(0, Basket.length)
}

function increaseBasketCapacity(newCapacity) {
  return (capacity = newCapacity)
}

function isFull() {
  if (Basket.length <= capacity) {
    return true
  } else {
    return false
  }
}

function remove(bagel) {
  const found = Basket.find((item) => item.variant === bagel)

  if (!found) {
    return false
  }

  const index = Basket.findIndex((item) => item.variant === bagel)
  Basket.splice(index, 1)
  return found
}

function displayPrice(bagel) {
  const found = Basket.find((item) => item.variant === bagel)

  if (!found) {
    return false
  }
  return found.price
}

function total() {
  return Basket.reduce((runningTotal, bagel) => {
    return runningTotal + bagel.price
  }, 0)
}

module.exports = {
  add,
  resetBasket,
  isFull,
  increaseBasketCapacity,
  remove,
  getBasket,
  displayPrice,
  total
}

// class Basket {
//     basket = []

//     constructor(capacity = 10) {
//         this.capacity = capacity
//     }

//     add(sku) {
//         if (this.basket.length >= this.capacity) {
//             return false
//         }

//         const found = this.basket.find(bagel => bagel.sku === sku)

//         if (found) {
//             found.quantity += 1
//             return found
//         }

//         const bagelToAdd = inventory.find(bagel => bagel.sku === sku)
//         const newBagel = {...bagelToAdd, quantity: 1}
//         this.basket.push(newBagel)
//         return newBagel
//     }
// }
