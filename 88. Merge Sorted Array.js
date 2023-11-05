/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*

[1,2,3,0,0,0]
     f
[2,5,6
   s

ds: two pointers
init pointer for num1 --> first
init pointer for num 2 --> second

while f >= 0 && s >= 0
--------

if f > s
swap
f--

else
swap
s--
--------
m = 4
n - 2
[1,3,5,2]
       f
[1,8,9]
     s
*/
var merge = function(nums1, m, nums2, n) {
    let f = m - 1; //having pointer start at the end
    let s = n - 1; //having pointer start at the end
    let end = m + n - 1 //pointer ending merged array


    while( f >= 0 && s >= 0){
        if(nums1[f] > nums2[s]){
            nums1[end] = nums1[f];
            f--;
        }
        else{
            nums1[end] = nums2[s];
            s--;
        }
        end--;
    }
    //if there are remaining elements in num 2
    while(s >= 0){
        nums1[end] = nums2[s];
        s--;
        end--
    }

};