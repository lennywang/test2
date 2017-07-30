(function(window,document){
    'use strict';
    var jsonp=function (url,data,callback){
        var fnSuffix=Math.random().toString().replace('.','');
        var cbFuncName='my_json_cb_'+fnSuffix;
        window[cbFuncName]=callback;
        var queryString=url.indexOf('?')==-1?'?':'&';
        for (var key in data){
            queryString+=key+'='+data[key]+'&';
        }
        queryString+='callback=' + cbFuncName;
        var scriptElement=document.createElement('script');
        scriptElement.src=url+queryString;
        document.body.appendChild(scriptElement);
    };
    window.$jsonp=jsonp;
})(window,document);

//1.挂载回调函数
//2.将data转换为url字符串的形式
//3.处理url中的回调参数
//4.创建一个script标签
//5.将script标签放到页面中