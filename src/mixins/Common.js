export default {
  methods:{
    alert:function ( msg ){
      layer.alert( msg );
      return false;
    },
    msg:function( msg ){
      layer.msg( msg );
      return false;
    },
    checkPhone:function(phone){
      var reg = /^1{1}\d{10}$/;
      if( !reg.test(phone)){
        return false;
      }else{
        return true;
      }
    }
  }
}
