var grades = [1,4,2];


var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;

console.log(avg)
