function MinMax(setOfNumbers){
  const min = Math.min.apply(null,setOfNumbers);
  const max = Math.max.apply(null,setOfNumbers);
  return {min:min, max: max}
}
let array = [1,23,-5,11];
console.log(MinMax(array));