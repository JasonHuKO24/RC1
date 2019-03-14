var fs = require('fs')
fs.readFile('a.txt',function(err,data){
    if(err){
        console.log(err)
        return;
    }
    console.log(data)

    console.log(data.toString())
})

//第二种方法
var fs = require('fs')
fs.readFile('a.txt','utf8',function(err,data){
    if(err){
        console.log(err)
        return;
    }
    console.log(data)

})