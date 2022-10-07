const sort = require('./sort');

describe('sort', () => {
  // start with simplest test fist
  it('returns an array in decending order', () => {
    expect(sort([1,2,3])).toEqual([3,2,1]);
  });
  // start with simplest next test taking account of all functionality
  it('returns and array in decending order with duplicates removed', () => {
    expect(sort([1,2,2,3])).toEqual([3,2,1]);
  });
  // check for 0 edge case
  it('returns 0 when given 0', () => {
    expect(sort([0])).toEqual([0]);
  });
  // check for multiple 100 edge case
  it('even returns when given 100 as part of array', ()=>{
    expect(sort([5,10,10,100,100,55])).toEqual([100,55,10,5]);
  });
  
});