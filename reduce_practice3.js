// by using reduce array method, sort data.txt as objects
let fs = require('fs')
/*
let obj = {
  andrew: [{
    item: 'Knife',
    price: '30',
    quantity: '3'
  },{
    item: 'Pot',
    price: '50',
    quantity: '2'
  }]
  }
}
*/

let output = fs.readFileSync('data.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(function (line) {
    return line.split('  ')
  })
  .reduce(function (customers, line) {
    // console.log(customers)
    // setting key in customer object which comes from {} in reduce
    // this line is creating a new array if there isn't one!
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))
