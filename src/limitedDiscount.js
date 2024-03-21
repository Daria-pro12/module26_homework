export function limitedDiscount(discount = 10) {

    if (discount > 30) {
        return 30;
    }
    return discount;
}
