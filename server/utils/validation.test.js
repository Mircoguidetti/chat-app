const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject no string values', () => {
    let res = isRealString('    ');

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let res = isRealString(98);

    expect(res).toBe(false);
  });

  it('should allow string with no-spaces characters', () => {
    let res = isRealString('  node  ');

    expect(res).toBe(true);
  });
});
