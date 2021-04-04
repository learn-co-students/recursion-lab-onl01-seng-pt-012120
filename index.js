function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString) {
    if (myString === "") {
        return "";
    } else {
        return reverseString(myString.substring(1)) + myString.charAt(0);
    }
}

function isPalindrome(myString) {
    if (myString.length === 0 || myString.length === 1) {
        return true;
    }
    if (myString[0] === myString[myString.length -1]) {
        return isPalindrome(myString.slice(1, myString.length - 1) );
    }
    return false;
}

function addUpTo(myArray, i) {
    return i ? myArray[i] + addUpTo(myArray, --i) : myArray[i];
}

function maxOf(myArray) {
    if (myArray.length === 1) {
        return myArray[0];
    } else {
    return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(myArray, num) {
    if (myArray.length === 0) {
        return false;
    } else if (myArray[0] === num) {
        return true;
    } else {
        return includesNumber(myArray.slice(1), num);
    }
}
