var fs = require('fs')
fs.writeFile('./a.txt','你好，你好',function(err){

    if(err){
        console.log(err)
        return;
    }
    console.log('success')
})