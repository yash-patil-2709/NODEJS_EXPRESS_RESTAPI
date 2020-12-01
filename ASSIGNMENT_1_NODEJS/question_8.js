
var fs=require('fs');
var sum=0;
var series;
var num;

fs.readFile('readme_qs8.txt','utf8',function(err,data){
  num=data;
  series=num.split(" ");
  console.log(series);
  for(var i=0; i<series.length;i++){
    sum=sum+parseInt(series[i]);
  }
  console.log(sum);
});
