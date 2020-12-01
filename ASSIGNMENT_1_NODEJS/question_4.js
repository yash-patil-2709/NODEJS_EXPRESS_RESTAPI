var fs=require('fs');

fs.writeFile('writeme_qs4.txt','Hey ho! Lets go!!!',(err)=>{
  if (err) throw err;

  console.log('The File was saved.');
});
