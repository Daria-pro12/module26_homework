import { reverseString } from "../reverseString";

describe('test for reverseString function', () => {

    it('correctly accepts a string and returns the reversed string', () => {
        expect(reverseString('simple')).toBe('elpmis')
    })
})