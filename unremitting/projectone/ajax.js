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
            var getData = sajax._json2string(json);
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

        // 把对象转化为字符串
        sajax._json2string = function(json){
            var arr = [];
            for(var k in json ){
                arr.push(k + "=" + json[k]);
            }
            return arr.join("&");
        }
}())
