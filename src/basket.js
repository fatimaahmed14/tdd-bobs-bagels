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

module.exports = {
  add,
  resetBasket
}
