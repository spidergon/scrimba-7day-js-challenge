// Day 1
function addBorder(array) {
  const wall = '*'.repeat(array[0].length + 2)

  array.unshift(wall)
  array.push(wall)

  for (let i = 1; i < array.length - 1; i++) {
    array[i] = '*'.concat(array[i], '*')
  }

  return array
}

// Day 2
function addTwoDigits(num) {
  const digits = num.toString().split('')
  return digits.reduce((prev, current) => parseInt(prev) + parseInt(current), 0)
}

// Day 3
function firstDuplicate(nums) {
  let first = -1
  nums.some((num, index) => {
    if (nums.indexOf(num) < index) {
      first = num
      return true
    }
  })
  return first
}
