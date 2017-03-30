// re-write the reduce function
let _reduce = (array, callback, initialValue) => {
  let sum = initialValue
  // looping through the array
  for (let i = 0; i < array.length; i++) {
    // setting the sum value to be a returned callback
    sum = callback(sum, array[i])
  }
  return sum
}

let output = _reduce([1, 2, 3, 4, 5], function (total, cur) {
  return total - cur
}, 10)

console.log(output)
