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

// Create a function to convert roman numeral to integerCreate a function to convert roman numeral to integer

const romanToNumeral = (s) => {

    const countRoman = (roman, current, result) => {
        const romanList = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        if (roman.length > 0) {
            const lastRoman = roman.pop();

            (current > romanList[lastRoman])
                ? result -= romanList[lastRoman]
                : result += romanList[lastRoman];

            return countRoman(roman, romanList[lastRoman], result);
        }

        return result;
    }

    return countRoman(s.split(""), 0, 0);

}

console.log(romanToNumeral("III"));
console.log(romanToNumeral("LVIII"));
console.log(romanToNumeral("MCMXCIV"));

console.log("___________________________________________________________");

