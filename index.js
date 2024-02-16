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

// Given an integer numRows, return the first numRows of Pascal's triangle.

const pascalTriangel = (numRows) => {
    if (numRows === 0) return [];

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        triangle.push(currentRow);
    }

    return triangle;
}

pascalTriangel(5).forEach((data) => console.log(data));