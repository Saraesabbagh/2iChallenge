const sort = require('./sort');

describe('sort', () => {
  it('returns an array in decending order', () => {
    expect(sort([1,2,3])).toEqual([3,2,1]);
  });
  it('returns and array in decending order with duplicates removed', () => {
    expect(sort([1,2,2,3])).toEqual([3,2,1]);
  });

});