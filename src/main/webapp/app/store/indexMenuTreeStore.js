Ext.define('admin.store.indexMenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: 'server/data.json',
        reader: {
            type: 'json'
        }
    }
});
