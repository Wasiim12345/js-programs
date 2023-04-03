function isBracketsClosed(code) {
    const stack = [];
  
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
  
      if (isOpenBracket(char)) {
        stack.push(char);
      } else if (isCloseBracket(char)) {
        const openBracket = stack.pop();
        if (!matches(openBracket, char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    return ['(', '[', '{'].includes(char);
  }
  
  function isCloseBracket(char) {
    return [')', ']', '}'].includes(char);
  }
  
  function matches(open, close) {
    return (
      (open === '(' && close === ')') ||
      (open === '[' && close === ']') ||
      (open === '{' && close === '}')
    );
  }
  
  const code1 = 'function test() { return "hello world"; }';
  console.log(isBracketsClosed(code1));
  
  const code2 = 'function test() { return "hello world"; } }';
  console.log(isBracketsClosed(code2));
  
  const code3 = 'function test() { return "hello } world"; }';
  console.log(isBracketsClosed(code3));
  