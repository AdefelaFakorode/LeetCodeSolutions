var subarraySum = function(nums, k) {
    let answer = 0;
    let curr = 0;
    let sumMap = new Map();

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        // Check if curr is = to k
        if (curr === k) {
            answer++;
        }

        // Check if there exists a subarray with sum equal to (curr - k) starting from some previous position.
        if (sumMap.has(curr - k)) {
            answer += sumMap.get(curr - k);
        }

        // Update the count of the current cumulative sum.
        if (sumMap.has(curr)) {
            sumMap.set(curr, sumMap.get(curr) + 1);
        } else {
            sumMap.set(curr, 1);
        }
    }

    return answer;
};