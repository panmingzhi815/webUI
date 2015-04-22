Ext.define("admin.view.indexMenuTree",{
    extend:'Ext.tree.Panel',
    rootVisible:false,
    fit:true,
    height:'100%',
    border:false,
    alias:'widget.indexMenuTree',
    store:'indexMenuTreeStore',
    hrefTarget: 'mainContent',
    bodyStyle:{
        padding: '10px'
    }
});
