import { limitedDiscount } from "../limitedDiscount";

describe('test for limitedDiscount function', () => {
    it('correct operation with a discount of more than 30, less than 30 and by default', () => {
        expect(limitedDiscount(70)).toBe(30);
        expect(limitedDiscount(20)).toBe(20);
        expect(limitedDiscount()).toBe(10)
    })
})