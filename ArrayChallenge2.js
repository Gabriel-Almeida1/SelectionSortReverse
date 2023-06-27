let numArray = []

for (i = 0; i < 5; i++) {
    let numInput = parseInt(prompt("Type a num: "))
    numArray[i] = numInput
}

console.log(numArray)

for (i = 0; i < numArray.length - 1; i++) {
    let maxIndex = i
    for (j = i + i; j < numArray.length; j++) {
        if (numArray[j] > numArray[maxIndex]) {
            maxIndex = j
        }
    }

    [numArray[i], numArray[maxIndex]] = [numArray[maxIndex], numArray[i]]
}

console.log(numArray)

