function findPairs(arr, sum) {
    const pairs = [];
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const difference = sum - current;

        if (hashTable[difference]) {
            pairs.push([difference, current]);
        }

        hashTable[current] = true;
    }

    return pairs;
}

const arr = [3, 6, 8, 2, 5, 9, 1, 4];
const sum = 10;
const pairs = findPairs(arr, sum);
console.log(pairs);
