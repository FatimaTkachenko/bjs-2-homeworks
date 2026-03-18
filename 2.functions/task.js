function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let countEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
            countEven++;
        }
    }
    if (countEven === 0) return 0;
    return sumEven / countEven;
}
// ===== ЗАДАНИЕ 3 (НОВОЕ - добавь это) =====
function makeWork(arrOfArr, func) {
    let maxWorkerResult = func(...arrOfArr[0]);

    for (let i = 1; i < arrOfArr.length; i++) {
        const currentResult = func(...arrOfArr[i]);

        if (currentResult > maxWorkerResult) {
            maxWorkerResult = currentResult;
        }
    }

    return maxWorkerResult;
}
// Тесты для проверки
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72
