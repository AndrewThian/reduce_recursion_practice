// only use reduce method to solve these questions
let jsonData = require('./data')

// 1) retrieve total of all ages
let ageSum = jsonData.reduce((all, item, index) => {
  all += item.age
  return all
}, 0)

// 2) set each KVP object as {email: name}
let emailName = jsonData.reduce((all, item, index) => {
  all[item.email] = item.name
  return all
}, {})

// 3) filter out only female from email:name KVP
let femaleEmail = jsonData.reduce((all, item, index) => {
  if (item.gender === 'female') {
    all[item.email] = item.name
  }
  return all
}, {})

// 4) filter out only male from email:name KVP
let maleEmail = jsonData.reduce((all, item, index) => {
  if (item.gender === 'male') all[item.email] = item.name
  return all
}, {})

// 5) sort items into male and female
let emailObj = jsonData.reduce((all, item, index) => {
  all[item.gender].push(item)
  return all
}, {male: [], female: []})

console.log(ageSum)
console.log(emailName)
console.log(femaleEmail)
console.log(maleEmail)
console.log(emailObj)
