function areStringsRotation(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }
    const concatenated = s1 + s1;
    return concatenated.includes(s2);
  }
  
  const s1 = 'abcd';
  const s2 = 'cdab';
  console.log(areStringsRotation(s1, s2));
  
  const s3 = 'hello';
  const s4 = 'loleh';
  console.log(areStringsRotation(s3, s4));
  
  const s5 = 'world';
  const s6 = 'dlrow';
  console.log(areStringsRotation(s5, s6));
  