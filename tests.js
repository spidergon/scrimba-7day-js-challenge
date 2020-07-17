// Tests Suite

// Day 1
describe('day1 - addBorder()', () => {
  it('adds a border around entire application', () => {
    // act
    const result = addBorder(['abc', 'ded'])

    // log
    console.log('day 1 - result:', result)

    // assert
    expect(result).toEqual(['*****', '*abc*', '*ded*', '*****'])
  })
})

// Day 2
describe('day2 - addTwoDigits()', () => {
  it('take a two digit number and return the sum of their numbers', () => {
    // act
    const result = addTwoDigits(29)

    // log
    console.log('day 2 - result:', result)

    // assert
    expect(result).toBe(11)
  })
})

// Day 3
describe('day3 - firstDuplicate()', () => {
  it('returns first duplicated value', () => {
    // act
    const result = firstDuplicate([2, 1, 3, 5, 3, 2])

    // log
    console.log('day 3 - result 1:', result)

    // assert
    expect(result).toBe(3)
  })

  it('returns -1 when no duplicated values', () => {
    // act
    const result = firstDuplicate([2, 1, 3, 5, 4, 6])

    // log
    console.log('day 3 - result 2:', result)

    // assert
    expect(result).toBe(-1)
  })
})

// Day 4
describe('day4 - sumAllPrimes()', () => {
  it('adds all prime numbers up to input number', () => {
    // act
    const result = sumAllPrimes(10)

    // log
    console.log('day 4 - result: ', result)

    // assert
    expect(result).toBe(17)
  })
})

// Day 5
describe('day 5 - evenDigitsOnly()', () => {
  it('returns true when all digits are even', () => {
    // act
    const result = evenDigitsOnly(248622)

    // log
    console.log('day 5 - result 1:', result)

    // assert
    expect(result).toBe(true)
  })

  it('returns fale when any digits are odd', () => {
    // act
    const result = evenDigitsOnly(642386)

    // log
    console.log('day 5 - result 2:', result)

    // assert
    expect(result).toBe(false)
  })
})

// Day 6
describe('day 6 - makeArrayConsecutive()', () => {
  it('returns total missing numbers between smallest and largest number', () => {
    // act
    const result = makeArrayConsecutive([6, 2, 3, 8])

    // log
    console.log('day 6 - result: ', result)

    // assert
    expect(result).toBe(3)
  })
})
