

/**
 *  WALK-THROUGH: 
 * 
 * - largestOfFour takes a 2D array
 * - then map over the arr
 * - in each iteration pass the sub array to reduce 
 * - reduce will return the largest number in each sub array 
 * - and pass it back to map to return it in an array 
 * 
 * 
 */


/**
 * HOW MY REDUCE WORKS:
 * 
 * - map will pass reduce an array of numbers (subArray)
 * - we initalize our largestNumber (acc) to null
 * - In the first iteration we update our largestNumber (acc) to equal our first number in the (subArray)
 * - and then on each iteration we check if the current number is greater than our largestNumber (acc)
 * - if so, then update our largestNumber (acc) to be the current number
 * - otherwise, return largestNumber (acc)
 * 
 * 
 */


// 2D array of numbers 
const numbres = [
    [4, 5, 1, 3], // 5
    [13, 27, 18, 26], // 26
    [32, 35, 37, 39], // 39
    [1000, 1001, 857, 1] // 1001
]

const largestOfFour = arr => {
    return arr.map(subArray => {
        return subArray.reduce((largestNumber, number) => {
            if(largestNumber === null || number > largestNumber) {
                return largestNumber = number
            }
            return largestNumber
        }, null)
    })
}
  

const largestNumbersInSubArrays = largestOfFour(numbres)

console.log({largestNumbersInSubArrays}) // [5, 26, 39, 1001]

