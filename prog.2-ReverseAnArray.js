function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arr);
  console.log(arr); // Output: [5, 4, 3, 2, 1]
  