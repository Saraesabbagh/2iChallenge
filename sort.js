const sort = (numbersArr) => {
  let sortedArr = numbersArr.sort((a, b) => b - a);
  let uniqueArr = [...new Set(sortedArr)];
  return uniqueArr;
}

module.exports= sort;