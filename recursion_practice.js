// by using recursion, make a data tree of animals and their parents
let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'cats' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter((c, i) => {
      console.log('current index', i)
      console.log(c, c.parent, parent)
      return c.parent === parent
    })
    .forEach(c => {
      node[c.id] = makeTree(categories, c.id)
    })
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2
  )
)
