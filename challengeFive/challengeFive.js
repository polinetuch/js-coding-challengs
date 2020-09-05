// Implement a function with objects and loops
// Create an objet with an array for the bill values

var john = {
    'bill': [124, 48, 268, 180, 42],
    calculatePercentage: function() {
        var tipArray = [];
        var totalBill = [];

        for (var i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 50) {
                this.tip = this.bill[i] * 0.20;
                this.total = this.tip + this.bill[i];
                tipArray.push(this.tip);
                totalBill.push(this.total);
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tip = this.bill[i] * 0.15;
                this.total = this.tip + this.bill[i];
                tipArray.push(this.tip)
                totalBill.push(this.total);
            } else {
                this.tip = this.bill[i] * 0.10;
                this.total = this.tip + this.bill[i]
                tipArray.push(this.tip);
                totalBill.push(this.total)
            }
        }
        console.log(`Tips: ${tipArray}`);
        console.log(`Total Bills: ${totalBill}`);
        return tipArray, totalBill;
    },
};

console.log(john.calculatePercentage());