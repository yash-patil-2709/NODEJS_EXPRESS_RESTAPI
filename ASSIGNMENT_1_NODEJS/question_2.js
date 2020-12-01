
var fs=require('fs');

fs.readFile('readme_qs2.txt','utf8',function(err,data){
  console.log(data);
});
