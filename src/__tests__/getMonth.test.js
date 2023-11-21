import { getMonth } from "../getMonth";

describe('test for getMonth function', () => {
    it('return the correct message, depending on the entered number, which corresponds to the month number', () => {
        expect(getMonth('1')).toBe('Январь');
        expect(getMonth('2')).toBe('Февраль');
        expect(getMonth('3')).toBe('До зимы еще далеко');
        expect(getMonth('4')).toBe('До зимы еще далеко');
        expect(getMonth('5')).toBe('До зимы еще далеко');
        expect(getMonth('6')).toBe('До зимы еще далеко');
        expect(getMonth('7')).toBe('До зимы еще далеко');
        expect(getMonth('8')).toBe('До зимы еще далеко');
        expect(getMonth('9')).toBe('До зимы еще далеко');
        expect(getMonth('10')).toBe('До зимы еще далеко');
        expect(getMonth('11')).toBe('Зима близко');
        expect(getMonth('12')).toBe('Декабрь');
    })
})