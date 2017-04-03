// Given a string of directions, eliminate all the directions that are opposing each other
// example ['NORTH', 'SOUTH', 'WEST', 'WEST', 'EAST'] would return ['WEST']

function dirReducSol (plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop()
    } else {
      dirs.push(dir)
    }
    return dirs
  }, [])
}
