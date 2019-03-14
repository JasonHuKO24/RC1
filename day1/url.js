var url =require('url')

var data = 'http://itcast.cn?name=张三&age=18';

console.log(data)
console.log(url.parse(data))
console.log(url.parse(data,true))

var urlQueryQbj = url.parse(data,true);
console.log(urlQueryQbj.query)
console.log(urlQueryQbj.query.name)
console.log(urlQueryQbj.query.age)
