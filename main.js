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
  // for (let i = 2; i <= num; i++) {
  //   let isPrime = true
  //   for (let j = 2; j < i; j++) {
  //     if (i % j === 0) {
  //       isPrime = false
  //       break
  //     }
  //   }
  //   if (isPrime) sum += i
  // }
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) sum += i
      if (i % j === 0) break
    }
  }
  return sum
}

// Day 5
function evenDigitsOnly(number) {
  const digits = number.toString().split('')
  return digits.every(d => parseInt(d) % 2 === 0)
}

// Day 6
function makeArrayConsecutive(nums) {
  let count = 0
  nums.sort((a, b) => a - b)
  const first = nums[0]
  const last = nums[nums.length - 1]
  for (let i = first; i < last; i++) {
    // if (nums.indexOf(i) === -1) count++
    if (!nums.includes(i)) count++
  }
  return count
}
