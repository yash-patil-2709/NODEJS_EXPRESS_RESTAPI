var fs=require('fs');
var string;
var search;

fs.writeFile('writeme_qs10.txt','Hey ho! Lets go!!!',(err)=>{
  if (err) throw err;

  console.log('The File was saved.');
});

fs.readFile('writeme_qs10.txt','utf8',function(err,data){
  console.log(data);
  string=data;

  search=string.split(" ");

  fs.writeFile(search[0],'Hey ho! Lets go!!!',(err)=>{
    if (err) throw err;

  });
});
