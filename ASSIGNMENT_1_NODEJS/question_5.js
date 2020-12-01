
var fs=require('fs');
var string;
var search;
var count;
var count=0;

fs.readFile('readme_qs5.txt','utf8',function(err,data){
  string=data;
  console.log(string);

  search=string.split(" ");
  console.log(search);

  for (var i = 0; i < search.length; i++) {
    if(search[i]=="Jake"){
      count++;
    }
  }
  console.log(count);
});
