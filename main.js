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
  // let first = -1
  // nums.some((num, index) => {
  //   if (nums.indexOf(num) < index) {
  //     first = num
  //     return true
  //   }
  // })
  // return first

  const first = {}

  for (let num of nums) {
    if (first.hasOwnProperty(num)) return num
    first[num] = null
  }

  return -1
}

// Day 4
function sumAllPrimes(num) {
  let sum = 0
  for (let i = 2; i <= num; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) sum += i
  }
  return sum
}
