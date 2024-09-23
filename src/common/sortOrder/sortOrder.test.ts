import { makeSortOrder } from './sortOrder';

const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const { compare, insert } = makeSortOrder(alphabet);

describe('compare', () => {
  it('returns 0 when A = B', () => {
    expect(compare('1', '1')).toBe(0);
  });

  it('returns 1 when A > B', () => {
    expect(compare('2', '10')).toBe(1);
  });

  it('returns -1 when A < B', () => {
    expect(compare('10', '2')).toBe(-1);
  });
});

describe('insert', () => {
  test.each([
    ['1', '3', '2'],
    ['1', '11', '105'],
    ['1', '12', '11'],
    ['19', '2', '195'],
    ['1', '2', '15'],
    ['12', '2', '16'],
    ['13', '2', '17'],
    ['14', '2', '17'],
    ['14', '15', '145'],
    ['18', '2', '19'],
  ])('when A=%s and B=%s returns %s', (a, b, result) => {
    expect(insert(a, b)).toBe(result);
  });

  it('returns value > left when only left side', () => {
    expect(insert('1')).toBe('2');
  });

  test.each([
    ['1', '2'],
    ['11', '12'],
    ['19', '190'],
    ['9', '90'],
    ['145', '146'],
    ['149', '1490'],
    ['1490', '1491'],
  ])('when A=%s and B is undefined returns %s', (a, result) => {
    expect(insert(a)).toBe(result);
  });

  it('returns value < right given only right side', () => {
    expect(insert(undefined, '1')).toBe('05');
  });

  it('returns 1 when no values passed', () => {
    expect(insert()).toBe('1');
  });
});
