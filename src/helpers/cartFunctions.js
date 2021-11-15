export function getCountProductsInCart() {
  let cart = JSON.parse(localStorage.getItem("Basket"));
  return cart ? cart.cardToBasket.length : 0;
}

export function calcSubPriceSmall(product) {
  return product.count * product.item.priceSmall;
}
export function calcSubPriceLarge(product) {
  return product.count * product.item.priceSmall;
}
// export function calcSubPrice(product) {
//   return calcSubPriceLarge() + calcSubPriceSmall();
// }
export function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((element) => {
    totalPrice += element.subPrice;
  });
  return totalPrice;
}
export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("Basket"));
  if (!cart) {
    cart = {
      cardToBasket: [],
      totalPrice: 0,
    };
  }
  let newcart = cart.cardToBasket.filter((elem) => elem.item.id === id);
  return newcart.length > 0 ? true : false;
}
