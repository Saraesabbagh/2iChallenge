const sort = require('./sort');

describe('sort', () => {
  it('returns an array in decending order', () => {
    expect(sort([1,2,3])).toEqual([3,2,1]);
  });
  it('returns and array in decending order with duplicates removed', () => {
    expect(sort([1,2,2,3])).toEqual([3,2,1]);
  });
  it('returns 0 when given 0', () => {
    expect(sort([0])).toEqual([0]);
  });
  it('even returns when given 100 as part of array', ()=>{
    expect(sort([5,10,10,100,100,55])).toEqual([100,55,10,5]);
  });
  
});