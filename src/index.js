module.exports = function toReadable(number) {
    let arr = String(number)
        .split("")
        .map((number) => {
            return Number(number);
        });

    let firstTen = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tenToTwenty = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let decades = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return 'zero';

    if (arr.length === 1) return firstTen[arr[0] - 1];

    if (arr.length === 2) {
        if (arr[1] === 0) return decades[arr[0] - 1];
        else if (arr[0] === 1) return tenToTwenty[arr[1] - 1];
        else return `${decades[arr[0] - 1]} ${firstTen[arr[1] - 1]}`;
    }
    
    if (arr.length === 3) {
        if (arr[1] === 0 && arr[2] === 0) return `${firstTen[arr[0] - 1]} hundred`;
        else if (arr[2] === 0)  return `${firstTen[arr[0] - 1]} hundred ${decades[arr[1] - 1]}`;
        else if (arr[1] === 0)  return `${firstTen[arr[0] - 1]} hundred ${firstTen[arr[2] - 1]}`;
        else if (arr[1] === 1) return `${firstTen[arr[0]-1]} hundred ${tenToTwenty[arr[2]-1]}`;
        else return `${firstTen[arr[0] - 1]} hundred ${decades[arr[1] - 1]} ${firstTen[arr[2] - 1]}`;
    }
};
