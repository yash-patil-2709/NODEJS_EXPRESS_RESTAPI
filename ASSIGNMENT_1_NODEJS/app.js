/*Phase 1:*/
var calculator=require('./calculator');

console.log(calculator.add(3,7));
console.log(calculator.mul(3,7));


/* Phase 2:*/
var add=require('./OPERATIONS/sum');
console.log(add.add(3,7));

var add=require('./OPERATIONS/subtraction');
console.log(add.sub(3,7));

var add=require('./OPERATIONS/multiplication');
console.log(add.mul(3,7));

var add=require('./OPERATIONS/division');
console.log(add.div(3,7));

/*Phase 3:*/
var today=require('moment');
console.log("Today's date is: "+today().format('YYYY-MM-DD HH:MM:SS')+' ' +calculator.add(3,7)+' '+calculator.mul(3,7));
