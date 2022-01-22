
const numbers = [3, 5, 2, 1]
const isEven = num => num % 2 === 0;


function findElement(arr, func) {
    for(const i in arr) {
        const testResults = func(arr[i])
        if(testResults) {
            return arr[i]
        }
    }
    return undefined
}
  


const firstEven = findElement(numbers, isEven);

console.log({firstEven})