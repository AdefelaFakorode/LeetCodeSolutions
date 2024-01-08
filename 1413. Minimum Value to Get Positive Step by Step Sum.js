/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 inti sum = 0
 init minSum = 0
 iter thru nums arr
    sum += num
    minSum = Math.min(minSum, sum)

    if(minSum < 1){
        return (-1* minSum + 1)
    }else{
        return 1
    }


 */
    var minStartValue = function(nums) {
        let sum = 0
        let minSum = 0
        for(const num of nums){
            sum += num
            minSum = Math.min(minSum, sum)
        }
    
        if(minSum < 1){
            return(-1 * minSum + 1)
        }else{
            return 1
        }
    };