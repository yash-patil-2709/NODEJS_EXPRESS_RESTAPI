var fs=require('fs');

var folder='./';

fs.readdir(folder,(err,files)=>{
  if (err) throw err;

  files.forEach(file => {
    var stats=fs.statSync(file);

    if(stats.isFile())
    console.log("File:" +file);

    else {
      console.log("Dir:" +file);
    }
  });
});
