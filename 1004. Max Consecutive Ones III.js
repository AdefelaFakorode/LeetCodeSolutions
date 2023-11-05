var longestOnes = function(nums, k) {
    let left = 0;
    let right;
    const n = nums.length;

    for (right = 0; right < n; right++) {
        if (nums[right] === 0) {
            k--;
        }

        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }
    
    return right - left;
};
