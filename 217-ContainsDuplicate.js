/**
 * @param {number[]} nums
 * @return {boolean}
 */
    //HINT
    //create a memory
    //Go through away and see if whay i see now, is something haven't seen before
        //if my number is never seen before, put it in memoy
        //if the number does not exist in memory, return true


        var containsDuplicate = function(nums) {
            let memory = {};
            for(let i =0; i<nums.length;i++){
                if (memory[nums[i]] === undefined){
                    memory[nums[i]] = "tindoan";
                } else {
                    return true;
                }
            }
            return false;
         };