!(function(){
    var sajax = window.sajax = {}; //命名空间
        sajax.get = function(url,json,callback){
            // 兼容ie6
            if (window.XMLHttpRequest) {
                // 核心 new XMLHttpRequest()
                var xhr = new XMLHttpRequest();//XMLHttpRequest 对象用于在后台与服务器交换数据
            }else {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            //console.log(xhr);
            //上面这个console.log非常屌，他能看到新new出来的XMLHttpRequest的所有固有属性。
            //不懂的时候打开注释console一下就全看到了。
            xhr.onreadystatechange = function(){
                //存有 XMLHttpRequest 的状态。从 0 到 4 发生变化
//              0: 请求未初始化
//				1: 服务器连接已建立
//				2: 请求已接收
//				3: 请求处理中
//				4: 请求已完成，且响应已就绪
                if (xhr.readyState == 4) {
                    // 默认的初始值
                    var status = 0;
                    var data = null;
                    // 规定的状态
                    var statusData = {
                        status : status,
                        data : data
                    }
                    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                    	    //status是系统（也就是XMLHttpRequest自带的一个属性，就是什么404什么的那个）
                    	    //if条件成功后的执行语句是写死的。
                        statusData.data = xhr.responseText;
                        //responseText也是xmlhttprequest的一个固有属性，就是连接的txt文件里的内容。
                        // 规定1是正常
                        statusData.status = 1;
                        callback(statusData,null);
                        //callback是返回函数，在这里的作用是给html那里的回调函数fonction传参
                    }else {
                        statusData.status = xhr.status;
                        callback(statusData,new Error("请求的文件发送错误"))
                    }
                }
            }
            var getData = sajax._json2string(json);
            //上面这个方法是最后面创建的那个方法的调用（也就是将json对象转化为字符串，然后与下面语句对接完成get请求的完整格式）
            xhr.open("get",url + "?" + getData,true);
            xhr.send(null);
        }

        sajax.post = function(url,json,callback){
            // 兼容ie6
            if (window.XMLHttpRequest) {
                // 核心 new XMLHttpRequest()
                var xhr = new XMLHttpRequest();
            }else {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {
                    // 默认的初始值
                    var status = 0;
                    var data = null;
                    // 规定的状态
                    var statusData = {
                        status : status,
                        data : data
                    }
                    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                        statusData.data = xhr.responseText;
                        // 规定1是正常
                        statusData.status = 1;
                        callback(statusData,null);
                    }else {
                        statusData.status = xhr.status;
                        callback(statusData,new Error("请求的文件发送错误"))
                    }
                }
            }
            var PostData = sajax._json2string(json);
            xhr.open("post",url,true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(PostData);
        }

        // 把对象转化为字符串    这一步是post 和get  都可以调用的一个方法。
        sajax._json2string = function(json){
            var arr = [];
            for(var k in json ){
                arr.push(k + "=" + json[k]);
            }
            return arr.join("&");
        }
        //var k 相当于创建一个键，也就是创建了一个“属性”，for in 自带遍历效果，arr.push是把对象的属性 属性值拼接之后
        //装入arr这个空数组，经过遍历之后我们再用join（&）进行分割数组并转化为字符串
}())
//一般向服务器发送信息的时候（因可能涉及到用户隐私）一般用post方法，
//而从数据库中请求调出的东西一般使用get方法。
//get方法的最后open那里的格式url?后面加的字符串会暴露用户信息。