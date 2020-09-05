var mark = {
    'mass': 78,
    'height': 1.77,
    calculateBMI: function() {
        return this.BMI = this.mass / (this.height * 2)
    }
};

var john = {
    'mass': 42,
    'height': 1.57,
    calculateBMI: function() {
        return this.BMI = this.mass / (this.height * 2)
    }
};
console.log(john, mark);

if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(`John\'s BMI is higher than Mark`);
} else if (mark.BMI > john.BMI) {
    console.log('Mark\'s BMI is higher than John')
}