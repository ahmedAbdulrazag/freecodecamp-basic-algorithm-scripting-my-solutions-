const array = [7, "ate", "", false, 9]


const bouncer = arr => arr.filter(value => value);

  
const truthyValues = bouncer(array);

console.log({truthyValues})


// this is the longer version, tho it's better to just use array.filter()

// const bouncer = arr => {
//     const truthyValuesArray = []
//     for(const i in arr) {
//       // if the current item in the array
//       // evaluates to true, push it to truthyValuesArray 
//       if(arr[i]) {
//         truthyValuesArray.push(arr[i])
//       }
//     }
//     return truthyValuesArray;
// }