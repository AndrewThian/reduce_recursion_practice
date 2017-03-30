// let jsonData = require('./data')

// rewrite array method filter by using reduce method
let _filter = (array, callback) => {
  return array.reduce((all, item, index) => {
    if (callback(item, index)) {
      all.push(item)
    }
    return all
  }, [])
}

let output = _filter([1, 2, 4, 5], (ele, ind) => {
  if (ele === 1) return ele
})

console.log(output)

// rewrite array method forEach by using reduce method
