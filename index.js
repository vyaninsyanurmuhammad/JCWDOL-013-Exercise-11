// Given an array nums of size n, return the majority element

const findMajorityElement = (nums) => {
    let seen = {};
    let majority = { key: 0, value: 0 };

    for (const num of nums) {
        seen[num] = seen[num] ? seen[num] + 1 : 1;
    }

    for (const key in seen) {
        if (majority.value <= seen[key] && majority.key < key) {
            majority["key"] = key;
            majority["value"] = seen[key];
        }
    }

    return majority.key;
}

console.log(findMajorityElement([3, 2, 3]));
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(findMajorityElement([2, 2, 1, 1, 1, 1, 2]));

console.log("___________________________________________________________");

