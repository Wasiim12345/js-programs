function findFirstNonRepeatedChar(str) {
    const charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const str = 'aabbcdeeff';
  const firstNonRepeatedChar = findFirstNonRepeatedChar(str);
  console.log(firstNonRepeatedChar);
  