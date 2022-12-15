const Basket = []

function add(variant) {
  const bagel = {
    id: Basket.length + 1,
    name: 'Bagel',
    variant
  }
  Basket.push(bagel)
  return Basket
}

function resetBasket() {
  Basket.splice(0, Basket.length)
}

function isFull() {
  if (Basket.length <= 5) {
    return true
  } else {
    return false
  }
}

module.exports = {
  add,
  resetBasket,
  isFull
}
