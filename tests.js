// Tests Suite

// Day 1
describe('addBorder()', () => {
  it('adds a border around entire application', () => {
    // arrange
    const strings = ['abc', 'ded']

    // act
    const result = addBorder(strings)

    // log
    console.log('result (day1): ', result)

    // assert
    expect(result).toEqual(['*****', '*abc*', '*ded*', '*****'])
  })
})

// Day 2
describe('addTwoDigits()', () => {
  it('take a two digit number and return the sum of their numbers', () => {
    // arrange
    const num = 29

    // act
    const result = addTwoDigits(num)

    // log
    console.log('result (day2): ', result)

    // assert
    expect(result).toBe(11)
  })
})
