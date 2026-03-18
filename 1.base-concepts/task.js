function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const params = [percent, contribution, amount, countMonths];

    for (let param of params) {
        const num = Number(param);
        if (Number.isNaN(num)) {
            return false;
        }
    }

    const p = percent / 100 / 12;
    const s = amount - contribution;

    if (s <= 0) {
        return Number(0.toFixed(2));
    }

    const payment = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
    const totalPayment = payment * countMonths;

    return Number(totalPayment.toFixed(2));
}
