function prefixToInfix(prefix) {
    const stack = [];
  
    for (let i = prefix.length - 1; i >= 0; i--) {
      const token = prefix[i];
  
      if (isOperator(token)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infix = `(${operand1} ${token} ${operand2})`;
        stack.push(infix);
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  function isOperator(token) {
    return ['+', '-', '*', '/', '^'].includes(token);
  }
  
  const prefix = '*+23*45';
  const infix = prefixToInfix(prefix);
  console.log(infix);
  