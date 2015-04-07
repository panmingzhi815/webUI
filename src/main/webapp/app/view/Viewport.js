Ext.define('admin.view.indexViewport', {
    extend: 'Ext.container.Viewport',
    //布局方式：border
    layout: 'border',
    items: [{
        title:'ExtJS案例',
        collapisble: true,
        region:'north',
        height: 100,
        html: '<br><center><font size=5>MVC模式实现的ExtJS案例</font><br><font size=2>源码来源:ITLee博客</font></center>'
    },{
        title: '功能菜单',
        region: 'west',
        width: 180,
        split: true,
        collapisble: true,
        html:'这里是菜单部分'
    }, {
        id: 'mainContent',
        title: '主题内容显示',
        layout: 'fit',
        region: 'center',
        collapisble: true,
        contentEl: 'contentIframe'
    }]
});