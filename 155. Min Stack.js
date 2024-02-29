/*
ds: stack

push
    if stack in empty
        push in stack
        push in minStack

    else
        push in stack
        push the min val in stack

pop
    if empty
        return null

    pop out in stack
            in minStack

top
return stack[stack.length - 1]

getmin
    return minStack[minStack.length - 1]
*/

var MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if(!this.stack.length){
        this.stack.push(val)
        this.minStack.push(val)
    }else{
        this.stack.push(val)
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if(this.stack.length === 0){
        return null
    }else{
        this.stack.pop()
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length === 0) {
        return null
    } else {
        return this.stack[this.stack.length - 1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if(this.stack.length === 0){
        return null
    }else{
        return this.minStack[this.minStack.length - 1]
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */