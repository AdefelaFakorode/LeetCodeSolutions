
var RandomizedSet = function () {
    this.arr = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */

RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false
    }

    this.arr.push(val)
    this.map.set(val, this.arr.length - 1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        let index = this.map.get(val) //get index
        let lastElement = this.arr[this.arr.length - 1] // get last index in arr


        if (index !== this.arr.length - 1) { //as long as its not the last index
            this.arr[index] = lastElement
            this.map.set(lastElement, index)
        }

        this.arr.pop()
        this.map.delete(val)


        return true
    }

    else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    let randomIndex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIndex]

    /* 
    time comp for each: O(1)
    space comp for each: O(1)
    */
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */