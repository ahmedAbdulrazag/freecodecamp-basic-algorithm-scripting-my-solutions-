
const string = "I'm a little tea pot";


const titleCase = str => {
    str = str.toLowerCase()
    const strArr = str.split(' ')
    const newStrArr = []

    for(const i in strArr) {
        const firstLetter = strArr[i].slice(0, 1).toUpperCase()
        const restOfTheWord = strArr[i].slice(1)
        newStrArr.push(firstLetter + restOfTheWord)
    }

    
    return newStrArr.join(' ')
}


const titleCased = titleCase(string);

console.log({titleCased})