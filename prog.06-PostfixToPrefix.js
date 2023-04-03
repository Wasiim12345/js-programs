function postfixToPrefix(postfix) {
    const stack = [];
  
    for (let i = 0; i < postfix.length; i++) {
      const token = postfix[i];
  
      if (isOperator(token)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const prefix = token + operand2 + operand1;
        stack.push(prefix);
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  function isOperator(token) {
    return ['+', '-', '*', '/', '^'].includes(token);
  }
  
  const postfix = '23+4*';
  const prefix = postfixToPrefix(postfix);
  console.log(prefix);
  