function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(generateRandomNumber(min, max));
    }
    return randomArray;
}

function calculateArrayAverage(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
}

module.exports = {
    generateRandomNumber,
    generateRandomArray,
    calculateArrayAverage
};
