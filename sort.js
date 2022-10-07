const sort = (numbersArr) => {
  // first sort the numbers into decending order
  let sortedArr = numbersArr.sort((a, b) => b - a);
  // second remove the duplicates
  let uniqueArr = [...new Set(sortedArr)];
  // third return the desired array. 
  return uniqueArr;
}

module.exports= sort;