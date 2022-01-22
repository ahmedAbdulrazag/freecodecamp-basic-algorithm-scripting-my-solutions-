const sentence = "The quick brown fox jumped over the lazy dog";

const findLongestWordLength = str => {
    // convert the string into an array of words 
    const arrayOfWords = str.split(' ')

    // find the longest word length using reduce 
    return arrayOfWords.reduce((longesLen, word) => {
        if(longesLen === null || word.length > longesLen) {
            return longesLen = word.length;
        }
        return longesLen
    }, null)
}

const longestWordLength = findLongestWordLength(sentence);

console.log({longestWordLength})