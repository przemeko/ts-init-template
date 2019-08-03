import { sum } from './utils';
describe('utils', () => {
  describe('sum', () => {
    it('should calculate correct sum', () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(-1, 2)).toBe(1);
    });
  });
});
