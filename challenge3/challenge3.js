
function calculateTipByPercentage(totalBill) {
    var percentage;
    if (totalBill < 50) {
        percentage = 0.2;
    } else if (totalBill >= 50 && totalBill <= 200 ) {
        percentage = 0.15
    } else {
        percentage = 0.1;
    }
    return percentage * totalBill;
}

var bills = [124, 48, 268];
var tips = [
    calculateTipByPercentage(bills[0]),
    calculateTipByPercentage(bills[1]),
    calculateTipByPercentage(bills[2])
];

var finalBill = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(finalBill);
console.log(tips)