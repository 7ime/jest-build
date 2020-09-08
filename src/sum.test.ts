import {sum} from "./sum";

describe('testing fn sum', () => {
    it('testing only numbers', () => {
        const result = sum(2, 2);
        expect(result).toEqual(4);
    });
});