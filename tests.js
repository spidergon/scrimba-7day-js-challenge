// Tests Suite

describe('Day 1 - addBorder()', () => {
  it('adds a border around entire application', () => {
    // act
    const result = addBorder(['abc', 'ded'])

    // log
    console.log('Day 1 - result:', result)

    // assert
    expect(result).toEqual(['*****', '*abc*', '*ded*', '*****'])
  })
})

describe('Day 2 - addTwoDigits()', () => {
  it('take a two digit number and return the sum of their numbers', () => {
    // act
    const result = addTwoDigits(29)

    // log
    console.log('Day 2 - result:', result)

    // assert
    expect(result).toBe(11)
  })
})

describe('Day 3 - firstDuplicate()', () => {
  it('returns first duplicated value', () => {
    // act
    const result = firstDuplicate([2, 1, 3, 5, 3, 2])

    // log
    console.log('Day 3 - result 1:', result)

    // assert
    expect(result).toBe(3)
  })

  it('returns -1 when no duplicated values', () => {
    // act
    const result = firstDuplicate([2, 1, 3, 5, 4, 6])

    // log
    console.log('Day 3 - result 2:', result)

    // assert
    expect(result).toBe(-1)
  })
})

describe('Day 4 - sumAllPrimes()', () => {
  it('adds all prime numbers up to input number', () => {
    // act
    const result = sumAllPrimes(10)

    // log
    console.log('Day 4 - result: ', result)

    // assert
    expect(result).toBe(17)
  })
})

describe('Day 5 - evenDigitsOnly()', () => {
  it('returns true when all digits are even', () => {
    // act
    const result = evenDigitsOnly(248622)

    // log
    console.log('Day 5 - result 1:', result)

    // assert
    expect(result).toBe(true)
  })

  it('returns fale when any digits are odd', () => {
    // act
    const result = evenDigitsOnly(642386)

    // log
    console.log('Day 5 - result 2:', result)

    // assert
    expect(result).toBe(false)
  })
})

describe('Day 6 - makeArrayConsecutive()', () => {
  it('returns total missing numbers between smallest and largest number', () => {
    // act
    const result = makeArrayConsecutive([6, 2, 3, 8])

    // log
    console.log('Day 6 - result: ', result)

    // assert
    expect(result).toBe(3)
  })
})

describe('Day 7 - properNounCorrection()', () => {
  it('adds proper noun capitalization', () => {
    // act
    const result = properNounCorrection('pARiS')

    // log
    console.log('Day 7 - result 1:', result)

    // assert
    expect(result).toBe('Paris')
  })

  it('properly cased words are still correct', () => {
    // act
    const result = properNounCorrection('John')

    // log
    console.log('Day 7 - result 2:', result)

    // assert
    expect(result).toBe('John')
  })
})
