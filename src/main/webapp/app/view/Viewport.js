//y
Ext.define('admin.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //布局方式：border
    layout: 'border',
    items: [{
        region:'north',
        height: 70,
        border:false,
        html: '<br><center><font size=6>通用数据管理平台</font></center>'
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