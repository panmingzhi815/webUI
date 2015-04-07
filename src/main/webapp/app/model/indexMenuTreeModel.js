Ext.define('admin.model.indexMenuTreeModel',{
    extend:"Ext.data.Model",
    fields:[
        {name:'id', type:'int'},
        {name:'pid', type:'int'},
        {name:'text', type:'varchar'},
        {name:'leaf', type:'boolean', defaultValue: true},
        {name: 'url', type:'varchar'}
    ]
});
