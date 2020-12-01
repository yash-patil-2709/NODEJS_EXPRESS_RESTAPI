var add=function(a,b){
  return 'The sum of '+ a +' & ' +b +' is: ' +(a+b);
};

var sub=function(a,b){
  return 'The subtraction of '+ a +' & ' +b +' is: ' +(a-b);
};

var mul=function(a,b){
  return 'The multiplication of '+ a +' & ' +b +' is: ' +(a*b);
};

var div=function(a,b){
  return 'The division of '+ a +' & ' +b +' is: ' +(a/b);
};

module.exports={
  add:add,
  sub:sub,
  mul:mul,
  div:div
};
