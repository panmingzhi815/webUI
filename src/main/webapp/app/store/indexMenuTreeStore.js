Ext.define('admin.store.indexMenuTreeStore',{
    extend:'Ext.data.TreeStore',
    model:'admin.model.indexMenuTreeModel',
    autoLoad : true,
    proxy : {
        type : 'ajax',
        url : 'http://localhost:8080/server/data.json',
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }
});
