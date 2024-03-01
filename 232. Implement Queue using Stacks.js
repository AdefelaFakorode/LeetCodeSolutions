
var MyQueue = function () {
    this.stack = []
    this.secStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */

/*
  5
  4      1
  3      2
  2      3
| 1 |  | 4 |
*/

MyQueue.prototype.push = function (x) {
    while(this.secStack.length != 0) {
        this.stack.push(this.secStack.pop())
    }

    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    while(this.stack.length != 0) {
        this.secStack.push(this.stack.pop())
    }

    return this.secStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
        while(this.stack.length != 0) {
        this.secStack.push(this.stack.pop())
    }
    return this.secStack[this.secStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stack.length === 0 && this.secStack.length === 0) {
        return true
    } else {
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */