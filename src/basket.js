// const data = require('../inventory.json')
// const { inventory } = data
// need to implement real data + bob's actual bagels
const Basket = []
let capacity = 5

function add(variant) {
  const bagel = {
    id: Basket.length + 1,
    name: 'Bagel',
    variant,
    quantity: 1
  }
  Basket.push(bagel)
  return Basket
}

// need to increaes the quantity every time a bagel on the same sku is added
// need to use find() then increase qunatity property by one is it already exists
// if it doesnt exist push it in the basket

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
  const found = Basket.find((item) => item === bagel)

  if (found) {
    //  copy basket + delete it
  }

  return Basket
}

module.exports = {
  add,
  resetBasket,
  isFull,
  increaseBasketCapacity,
  remove
}

// const data = require('../inventory.json')
// const { inventory } = data

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
