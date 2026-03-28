// Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
    sum += num;
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min, max, avg };
}
// Задача 2
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) sumEvenElement += num;
    else sumOddElement += num;
  }
  return sumEvenElement - sumOddElement;
}
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}
// Задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}