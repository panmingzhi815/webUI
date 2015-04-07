Ext.define("admin.view.indexMenuTree",{
    extend:'Ext.tree.Panel',
    border:false,
    hrefTarget:'mainContent',
    rootVisible:true,
    alias:'widget.indexMenuTree',
    store:'indexMenuTreeStore',
    bodyStyle:{
        padding:'10px'
    }
});
