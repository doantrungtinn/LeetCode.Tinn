/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 //nums.reduce
var reduce = function(nums, fn, init) {
    nums = [1,2,3,4];
    let res = init;
    for (const n of nums){
        res = fn(init, n)
    }
    return nums.reduce(fn, init);
};


