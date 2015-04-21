Ext.define("admin.view.indexMenuTree",{
    extend:'Ext.tree.Panel',
    border:false,
    fit:true,
    hrefTarget:'mainContent',
    rootVisible:false,
    alias:'widget.indexMenuTree',
    store:'indexMenuTreeStore',
    bodyStyle:{
        background: '#ffc',
        padding: '10px'
    }
});
