

Ext.onReady(function(){
    //开启悬浮提示功能
    Ext.QuickTips.init();
    //开启动态加载
    Ext.Loader.setConfig({
        enabled: true
    });
    //创建应用程序的实例
    Ext.application({
        //设定命名空间
        name: 'admin',
        //指定配置选项，设置相应的路径
        appFolder: 'app',
        //自动加载和实例化app/view下的Viewport.js文件
        autoCreateViewport:true,
        //加载控制器
        controllers: ['indexController']
    });
});