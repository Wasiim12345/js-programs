function reverseStack(stack) {
    const reversedStack = [];
  
    while (stack.length > 0) {
      reversedStack.push(stack.pop());
    }
  
    return reversedStack;
  }
  
  const stack = [1, 2, 3, 4, 5];
  const reversedStack = reverseStack(stack);
  
  console.log(reversedStack);
  