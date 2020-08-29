var massMark = 78;
var heightMark = 1.77;
var massJohn = 42;
var heightJohn = 1.57;

var bmiMark = massMark / (heightMark * heightMark); 
console.log("Mark's BMI is:" + " " + bmiMark);

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log("John's BMI is:" + " " + bmiJohn);

var whoIsHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + whoIsHigher);







