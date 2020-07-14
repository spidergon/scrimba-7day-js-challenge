// Tests Suite

// Day 1
describe('day1 - addBorder()', () => {
  it('adds a border around entire application', () => {
    // arrange
    const strings = ['abc', 'ded']

    // act
    const result = addBorder(strings)

    // log
    console.log('day 1 - result:', result)

    // assert
    expect(result).toEqual(['*****', '*abc*', '*ded*', '*****'])
  })
})

// Day 2
describe('day2 - addTwoDigits()', () => {
  it('take a two digit number and return the sum of their numbers', () => {
    // arrange
    const num = 29

    // act
    const result = addTwoDigits(num)

    // log
    console.log('day 2 - result:', result)

    // assert
    expect(result).toBe(11)
  })
})

// Day 3
describe('day3 - firstDuplicate()', () => {
  it('returns first duplicated value', () => {
    // arrange
    const nums = [2, 1, 3, 5, 3, 2]

    // act
    const result = firstDuplicate(nums)

    // log
    console.log('day 3 - result 1:', result)

    // assert
    expect(result).toBe(3)
  })

  it('returns -1 when no duplicated values', () => {
    // arrange
    const nums = [2, 1, 3, 5, 4, 6]

    // act
    const result = firstDuplicate(nums)

    // log
    console.log('day 3 - result 2:', result)

    // assert
    expect(result).toBe(-1)
  })
})
