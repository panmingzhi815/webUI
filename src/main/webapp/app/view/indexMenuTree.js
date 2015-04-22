Ext.define("admin.view.indexMenuTree",{
    extend:'Ext.tree.Panel',
    rootVisible:false,
    fit:true,
    border:false,
    alias:'widget.indexMenuTree',
    store:'indexMenuTreeStore',
    bodyStyle:{
        padding: '10px'
    }
});
