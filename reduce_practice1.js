// by using reduce array method, check how many times the string repeats itself
let arr = ['apple', 'orange', 'apple', 'orange', 'pear', 'orange']

// 1) write without using reduce method
let getWordCnt = (array) => {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    obj[item] = obj[item] || 0
    obj[item] += 1
  }
  return obj
}

console.log(getWordCnt(arr))

// 2) write with reduce method
let getWordCntReduce = () => {
  return arr.reduce((prev, next) => {
    prev[next] = prev[next] || 0
    prev[next] += 1
    return prev
  }, {})
}

console.log(getWordCntReduce(arr))
