"use strict";
// Задание 1: Решение квадратного уравнения
function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2];
    }
}
// Задание 2: Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    countMonths = Number(countMonths);
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }
    const principal = amount - contribution;
    if (principal <= 0) {
        return 0;
    }
    const monthlyRate = (percent / 100) / 12;
    const monthlyPayment = principal * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
    const totalPayment = monthlyPayment * countMonths + contribution;
    return Number(totalPayment.toFixed(2));
}