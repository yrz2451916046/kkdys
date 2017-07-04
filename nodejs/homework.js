//01
    // const http = require ('http');

    // //const hostname = '127.0.0.1'
    // const hostname = '192.168.30.50';
    // const port = 3000;

    // var a = 0;

    // const server = http.createServer((req,res) => {
    //     res.statusCode = 200;
    //     console.log("我收到了一个请求！");
    //     a++;
    //     res.setHeader('Content-Type' , 'text/YRz');
    //     res.end(a.toString() + 'Hello world! \n')
    // });

    // server.listen(port, hostname, () =>{
    //     console.log(`Server running at http://${hostname}:${port}/`);
    // });
//03证明nodejs是单线程的
//     const http = require('http');

// //  const hostname = '127.0.0.1'

//     const hostname = '192.168.30.50';
//     const port = 3000;

//     const server = http.createServer((req,res) => {
//         res.statusCode = 200;

//         var a = parseInt (Math.random() * 1000);
//         console.log('我收到了一个请求！' + a);
//         res.setHeader('Content-Type','text/YRz');
//         res.end(a.toString() + 'Hello world \n');

//         if(a == 555){
//             console.log(req.connection.remoteAddress);
//             throw new Error('发生了代码错误！');

//         };
//     });

//     server.listen(port,hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     });

//04nodejs非阻塞IO
//     const http = require('http');
//     const fs = require('fs');

// //  const hostname = '127.0.0.1'
//     const hostname = '192.168.30.50';
//     const port = 3000;

//     const server = http.createServer((req,res) => {
//         res.statusCode = 200;
//         console.log(req.connection.remoteAddress + '进来了开始运算');
        
//         while(parseInt(Math.random() * 10000) != 5555){
//             //模拟计算一个任务
//             //console.log(111);
//         }
//         console.log(req.connection.remoteAddress + '此刻出现55555');

//         //下面这个语句是读取文件，注意他是一个异步语句
//         fs.readFile('./h6.jpg',function(err,data){
//             res.setHeader('Content-Type','image/jpeg');
//             res.end(data);

//             console.log(req.connection.remoteAddress + '图片读取完毕！');
//         })

//         //console.log('我收到了一个请求' + a);
//         //res.setHeader('Content-Type','text/YRz');
//         //res.end(a.toString() + 'Hello world!');

//         // if(a == 555){
//         //     console.log(req.connection.remoteAddress);
//         //     throw new Error('发生了代码错误！');
//         // }

//     })

//     server.listen(port,hostname,() => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     });
//05路由
//     const http = require('http');
//     const fs = require('fs');

// //  const hostname = '127.0.0.1';
//     const hostname = '192.168.30.50';
//     const port = 3000;
    
//     const server = http.createServer((req,res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/YRz;charset=UTF-8');
//         console.log("接受一个请求！");
//         if(req.url == '/YRz'){
//             //设置HTTP返回内容
//             res.end("{username : 'YRz' , age : 18}");
//         }else if(req.url == '/hehe'){
//             res.end("呵呵你妹！！！");
//         }else if(req.url == '/hello'){
//             fs.readFile('index.html',function(err,data){
//                 res.end(data);
//             });
//         }else{
//             res.end('hi body ,没有这个网址！');
//         }
//     })

//     server.listen(port,hostname,() => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     })

//06.req对象
    // const http = require('http');
    // const server = http.createServer(function(req,res){
    //     //HTTP请求头
    //     console.log(req.headers);
    //     console.log(req.headers['user-agent']);

    //     //HTTP版本号
    //     console.log(req.httpVersion);

    //     //请求类型  get，post
    //     console.log(req.method);

    //     res.setHeader('Content-Type','text/html;charset=UTF-8');
    //     if(req.method.toLocaleLowerCase() == 'get'){
    //         res.end('对不起，您无权查看');
    //     }else if(req.method.toLocaleLowerCase() == 'post'){
    //         res.end('您可以尽情查看信息了');
    //     }

    //     console.log(req.url);
    //     res.end('YRz');
    // })
    // server.listen(3000,"localhost");
    // console.log('服务器正运行在3000端口');
//07res对象
    // var http = require('http');

    // var server = http.createServer(function(req, res) {
    //     // res.statusCode = 266;
    //     // res.setHeader('Content-Type', 'text/plain');

    //     res.writeHead(269, { "Content-Type": "text/plain" })

    //     res.write("<h1>hehe </h1>");
    //     // res.write("<h1>2333</h1>");
    //     // res.write("<h1>4444 </h1>");
    //     res.end('111');
    // })

    // server.listen(3000, "localhost");
    // console.log("服务器已经运行在3000端口");

//08url模块
    // var url = require('url');
    // var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

    // console.log(obj);

//09querstring模块
    // var querstring = require('querystring');
    // var obj = querstring.parse('username=stark&age=18&hobby=lanqiu');
    // console.log(obj);

    // { username: 'stark', age: '18', hobby: 'lanqiu' }

//10url和querstring
    // var url = require('url');
    // var querstring = require('querystring');

    // var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

    // let query = obj.query;

    // var obj1 = querstring.parse(query);
    // console.log(obj1);

    // console.log(obj);

//11.path模块
    // var http = require('http');

    // var path = require('path');

    // var server = http.createServer(function(req, res) {
    //     res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" })
    //     res.end("你访问的页面是" + path.extname(req.url));
    // })

    // server.listen(3000, "localhost");
    // console.log("服务器已经运行");

//12.fs模块
    // var fs = require("fs");

    // fs.readFile("./static/1.md", function(err, data) {
    //     if (err) throw err;
    //     console.log(data.toString());
    // })


    // fs.writeFile("./static/2.md", "今天学nodejs 好神奇啊，竟然可以往文件写东西！", function(err) {
    //     if (err) throw err;
    //     // console.log(data.toString());
    // })

    // fs.appendFile('./static/2.md', '呵呵，我来写东西了，不会覆盖你的，我是追加到里面的！嘿嘿', (err) => {
    //     if (err) throw err;
    //     console.log('The "data to append" was appended to file!');
    // });