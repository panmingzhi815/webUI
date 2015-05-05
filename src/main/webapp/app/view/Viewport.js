//y
Ext.define('admin.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //布局方式：border
    layout: 'border',
    items: [{
        region:'north',
        height: 70,
        border:false,
        html: '<img src="images/logo_48.png" style="margin-top: 11px;margin-left: 11px;float: left" vertical-align:middle;/><span style="line-height: 70px;height: 70px;font-size: 20px ">通用数据管理平台</span>'
    },{
        title: '功能菜单',
        region: 'west',
        width: 180,
        split: true,
        collapisble: true,
        items:[{
            xtype:'indexMenuTree'
        }]
    }, {
        xtype: 'tabpanel',
        region: 'center',
        fit:true,
        id : 'mainView',
        listeners: {
            afterrender: function() {
                var mainTab = Ext.getCmp('mainView');
                mainTab.add({
                    id: -1,
                    title: "欢迎使用",
                    closable: false,
                    fit:true,
                    html: "<iframe id='contentIframe' name='contentIframe' style='height: 100%; width: 100%' frameborder='no' src='images/main.jpg'></iframe>"
                }).show();
            }
        }
    }]
});