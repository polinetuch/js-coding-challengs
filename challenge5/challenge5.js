// SECOND VERSION AND CLEANER SOLUTION
var john = {
    name: "John",
    bill: [124, 48, 268, 180, 42],
    calculatePercentage: function() {
        this.tip = [];
        this.totalBillAndTip = [];
        var percentage;

        for (var i = 0; i < this.bill.length; i++) {
            var billIndex = this.bill[i]
            if (billIndex < 50) {
                percentage = 0.20;
            } else if (billIndex >= 50 && billIndex <= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }
            this.tip[i] = billIndex * percentage;
            this.totalBillAndTip[i] = billIndex + billIndex * percentage;
        }
    }
};

var mark = {
    name: "Mark",
    bill: [77, 375, 110, 45],
    calculateTipAndTotalBill: function() {
        var percentage; 
        this.tip = [];
        this.totalBillAndTip = [];

        for (var i = 0; i < this.bill.length; i++) {
            var billIndex = this.bill[i];

            if (billIndex < 100) {
                percentage = 0.20;
            } else if (billIndex >= 100 && billIndex <= 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            this.tip[i] = billIndex * percentage;
            this.totalBillAndTip[i] = billIndex + billIndex * percentage;
        }
    }
};

function calculateAvgTip(tips) {
    var totalAvgTip = 0;
    for (var i = 0; i < tips.length; i++) {
        totalAvgTip = totalAvgTip + tips[i];
    }
    return totalAvgTip / tips.length;
}



john.calculatePercentage();
mark.calculateTipAndTotalBill();
console.log(john);
console.log(mark);

john.averageTipPay = calculateAvgTip(john.tip);
mark.averageTipPay = calculateAvgTip(mark.tip);

if (john.averageTipPay > mark.averageTipPay) {
    console.log("John paid higher tip with an average of", john.averageTipPay)
} else if (mark.averageTipPay > john.averageTipPay) {
    console.log("Mark paid higher tipe of", mark.averageTipPay)
}


// FIRST SOLUTION THAT I CAME UP WITH
// var john = {
//     'bill': [124, 48, 268, 180, 42],
//     johnTipArray: [],
//     calculatePercentage: function() {
        
//         var totalBill = [];

//         for (var i = 0; i < this.bill.length; i++) {
//             if (this.bill[i] < 50) {
//                 this.tip = this.bill[i] * 0.20;
//                 this.total = this.tip + this.bill[i];
//                 this.johnTipArray.push(this.tip);
//                 totalBill.push(this.total);
//             } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
//                 this.tip = this.bill[i] * 0.15;
//                 this.total = this.tip + this.bill[i];
//                 this.johnTipArray.push(this.tip)
//                 totalBill.push(this.total);
//             } else {
//                 this.tip = this.bill[i] * 0.10;
//                 this.total = this.tip + this.bill[i]
//                 this.johnTipArray.push(this.tip);
//                 totalBill.push(this.total)
//             }
//         }
//     }
// };

// var billMark = [77, 375, 110, 45];
// var markTipArray = [];

// function calculateMarkTip() {
//     var markTip;
//     for (var i = 0; i < billMark.length; i++) {
//         if (billMark[i] < 100) {
//             markTip = billMark[i] * 0.20;
//         } else if (billMark[i] >= 100 && billMark[i] <= 300) {
//             markTip = billMark[i] * 0.10;
//         } else {
//             markTip = billMark[i] * 0.25;
//         }
//         markTipArray.push(markTip);
//     }
// }

// function calcAvgTip() {
//     var markTotalTipVal = markTipArray.reduce(function(a, b) {
//         return a + b;
//     }, 0)
//     var markAvgTip = markTotalTipVal / markTipArray.length;
//     console.log("Mark's avg tip", markAvgTip)

//     var johnTotalTipVal = john.johnTipArray.reduce(function(a, b) {
//         return a+ b;
//     }, 0);
//     var johnAvgTip = johnTotalTipVal / john.johnTipArray.length;
//     console.log("John's avg tip", johnAvgTip);

//     if (markAvgTip > johnAvgTip) {
//         console.log("Mark's average tip is higher than John with value of", markAvgTip);
//     } else {
//         console.log("John's average tip is higher than Mark with value of", johnAvgTip);
//     }
// }

// john.calculatePercentage();
// calculateMarkTip();
// calcAvgTip();