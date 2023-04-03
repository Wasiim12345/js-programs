class Stack {
    constructor() {
      this.items = [];
      this.minItems = [];
    }
  
    push(item) {
      this.items.push(item);
      if (!this.minItems.length || item <= this.minItems[this.minItems.length - 1]) {
        this.minItems.push(item);
      }
    }
  
    pop() {
      if (!this.items.length) {
        return null;
      }
      const item = this.items.pop();
      if (item === this.minItems[this.minItems.length - 1]) {
        this.minItems.pop();
      }
      return item;
    }
  
    getMin() {
      return this.minItems.length ? this.minItems[this.minItems.length - 1] : null;
    }
  }
  
  const stack = new Stack();
  stack.push(3);
  stack.push(5);
  stack.push(1);
  stack.push(2);
  console.log(stack.getMin());
  