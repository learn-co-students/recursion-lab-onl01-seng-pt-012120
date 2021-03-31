// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {

        printString(myString.substring(1, myString.length))
    }
};

function reverseString(myString) {
    const size = myString.length;
    if (myString.length > 1) {
        return myString[size - 1] + reverseString(myString.substring(0, size - 1));
    } else {
        return myString;
    }
};

function isPalindrome(myString) {
    //return reverseString(myString) === myString;
    const size = myString.length;
    if (size === 0 || myString[0] !== myString[size - 1]) {
        return false
    };
    if (size > 1) {
        isPalindrome(myString.substring(1, size - 1));
    };
    return true;
};

function addUpTo(array, index) {
    if (index > 0) {
        return array[index] + addUpTo(array, index - 1);
    };
    return array[0];
};

function maxOf(array) {
    const lastIndex = array.length - 1
    if (array.length > 1) {
        return array[0] > array[lastIndex] ? maxOf(array.slice(0, lastIndex)) : maxOf(array.slice(1));
    };
    return array[0];
};

function includesNumber(array, number) {

    if (array[0] === number) {
        return true;
    } else if (array.length > 1) {
        return includesNumber(array.slice(1), number);
    } else {
        return false;
    };
}