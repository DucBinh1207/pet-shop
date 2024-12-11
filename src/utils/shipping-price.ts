export function shippingPrice(price: number) {
  if (price > 5000000) {
    return 0;
  } else if (price >= 2000000) {
    return 200000;
  } else if (price >= 500000) {
    return 100000;
  } else if (price >= 200000) {
    return 80000;
  } else {
    return 50000;
  }
}
