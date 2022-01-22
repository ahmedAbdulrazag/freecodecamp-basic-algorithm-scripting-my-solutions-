

const array = [0, 1, 2, 3, 4, 5, 6]
const size = 3

const chunkArrayInGroups = (arr, size) => {
    const newArray = []
    const temp = []

    for(let i = 0; i < arr.length; i++)
    {
        temp.push(arr[i])
        if(temp.length === size) {
            newArray.push([...temp])
            temp.length = 0;
        }

        if(i === arr.length - 1 && temp.length) {
            console.log({'lastItem': arr[i]})
            newArray.push([...temp])
        }
    }
    return newArray
}

const chunks = chunkArrayInGroups(array, size)

console.log({chunks})