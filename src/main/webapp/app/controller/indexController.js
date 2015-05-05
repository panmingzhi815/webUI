Ext.define('admin.controller.indexController', {
    extend: 'Ext.app.Controller',
    views: ['Viewport', 'indexMenuTree','systemAccountManager'],
    model: [],
    stores: ['indexMenuTreeStore'],
    init: function () {
        this.control({
            'indexMenuTree': {
                itemclick: this.addTab
            }
        });
    },
    addTab: function (view, rec, item, index, eventObj) {
        var xtype = rec.raw.xtype;
        var text = rec.get('text');
        var id = rec.get('id');
        var leaf = rec.get('leaf');

        if (leaf) {
            var mainTab = Ext.getCmp('mainView');
            //如果已有该id的tab,就激活它
            //否则创建
            var tab = mainTab.queryById(id);
            if (tab) {
                mainTab.setActiveTab(tab);
            } else {
                mainTab.add({
                    id: id,
                    title: text,
                    closable: true,
                    border: false,
                    xtype:xtype
                }).show();
            }
            ;
        }
    }
});