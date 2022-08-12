module.exports = function toReadable(number) {
    if (!number) return "zero";
    let arr1 = [
        "",
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
    let arr2 = [
        "ten",
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
    let arr3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = "";
    if (number % 100 > 9 && number % 100 < 20) str = arr2[number % 10];
    else
        str = (
            arr3[Math.trunc(number / 10) % 10] +
            " " +
            arr1[number % 10]
        ).trim();
    number = Math.trunc(number / 100);
    if (number) str = (arr1[number] + " hundred " + str).trim();
    return str;
};