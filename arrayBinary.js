var nums = [-10, -3, 0, 5, 9];

var root = {
    val: nums[2], // 0
    left: {
        val: nums[0], // -10
        left: null,
        right: {
            val: nums[1], // -3
            left: null,
            right: null
        }
    },
    right: {
        val: nums[3], // 5
        left: null,
        right: {
            val: nums[4], // 9
            left: null,
            right: null
        }
    }
};

console.log(root);