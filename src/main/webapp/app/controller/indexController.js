Ext.define('admin.controller.indexController', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','indexMenuTree'],
    model:['indexMenuTreeModel'],
    stores:['indexMenuTreeStore']
});