<template>

  <div class="micronews micronews-login">
    <div class="micronews-header-wrap">
      <div class="micronews-header w1000 layui-clear">
        <h1 class="logo">
          <router-link to='/'>
            <img src="@/assets/static/images/LOGO.png" alt="logo">
            <span class="layui-hide">LOGO</span>
          </router-link>
        </h1>
        <p class="nav">
          <router-link to='/' class="active">最新</router-link>
          <router-link to='/List'>娱乐</router-link>
          <router-link to='/List'>生活</router-link>
          <router-link to='/List'>财经</router-link>
          <router-link to='/List'>科技</router-link>
          <router-link to='/List'>军事</router-link>
        </p>
        <div class="search-bar">
          <form class="layui-form" action="">
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="title"  placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
                <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="login">
          <router-link to='/Login'>登录</router-link>|| <router-link to='/Reg'>注册</router-link>
          <!-- <a href="login.html"> -->
          <!-- <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;"> -->
          <!-- </a> -->
        </div>
        <div class="menu-icon">
          <i class="layui-icon layui-icon-more-vertical"></i>
        </div>
        <div class="mobile-nav">
          <ul class="layui-nav" lay-filter="">
            <li class="layui-nav-item layui-this"><a href="index.html">最新</a></li>
            <li class="layui-nav-item"><a href="list.html">娱乐</a></li>
            <li class="layui-nav-item"><a href="list.html">生活</a></li>
            <li class="layui-nav-item"><a href="list.html">财经</a></li>
            <li class="layui-nav-item"><a href="list.html">科技</a></li>
            <li class="layui-nav-item"><a href="list.html">军事</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" v-model="phone" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" v-model="user_img_code" id="imgCode" placeholder="请输入图片验证码" autocomplete="off" class="layui-input">
                <img :src="img_code" @click="changeImgCode()">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required"  v-model="msg_code"
                       placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name="" @click="getMsgCode" :value="TimeCode" v-if="sendMark" class="obtain layui-btn">
                <input type="button" name="" :value="TimeCode" v-else class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="password" v-model="psd"
                       placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="passwords" v-model="repsd"
                       placeholder="请输入确认密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like[]" :checked="agree" :value="1" lay-filter="agree" v-model="agree"
                       lay-skin="primary" title="我已阅读并同意" checked="">
                <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>

              </div>
            </div>

            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" type="button"  lay-filter="*" @click="reg">注册</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" style="background-color:rgb(187 184 184)" @click="gotoLogin"
                        lay-submit lay-filter="*" onclick="return false">去登陆</button>
              </div>
            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
          <div class="other-login">
            <a href="#">
              <img src="@/assets/static/images/load1.png">
            </a>
            <a href="#">
              <img src="@/assets/static/images/load2.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/static/css/main.css"
  import "@/assets/layui/css/layui.css"
  import Common from '@/mixins/Common.js'
  export default {
    name: "Login",
    data(){
      return {
        img_code:'',
        phone:'',
        user_img_code:'',
        TimeCode:'验证码',
        msg_code:'',
        sendMark:1,
        psd:'',
        repsd:'',
        agree:[ 2 ],
        msg_send_mark:0,
      }
    },
    methods:{
      gotoLogin:function(){
        this.$router.push({name:'Login'})
      },
      changeImgCode:function(){
        this.img_code=this.img_code+'&rand='+Math.random();
      },
      CountDown:function(){
        this.sendMark=0;
        this.TimeCode=59;
        let _this=this;
        let int_val=setInterval(function(){
          _this.TimeCode--;
          if(_this.TimeCode<1){
            _this.TimeCode='验证码';
            _this.sendMark=1;
            clearInterval(int_val)
          }
        },1000)
      },
      getMsgCode:function () {
        if(this.phone==''){
          layer.alert('请输入你的手机号');
          return false;
        }
        var reg=/^1{1}\d{10}$/;
        if(!reg.test(this.phone)){
          layer.alert('手机号格式不正确');
          return false;
        }
        if(this.user_img_code==''){
          layer.alert('请输入图片验证码');
          return false;
        }
        let api_req ={
          sid:this.sid,
          user_img_code:this.user_img_code,
          phone:this.phone,
          type:1
        };
        //调短信发送接口
        this.$http.post('api/sendMsgCode',api_req).then(success=>{
          console.log(success);

          if(success.body.status!=200){
            alert(success.body.msg);
            return false;
            layui.layer.alert(success.body.msg);
            this.changeImgCode();
          }else{
            this.changeImgCode();
            this.CountDown();
            this.msg_send_mark=1;

          }
        },error=>{
          layer.alert('短信发送失败,请重试');
          return false;
        });
      },
      reg:function(){
        // layui.form.on('checkbox(agree'),function (data) {
          // console.log(data.elem);
          // console.log(data.elem.checked);
          // console.log(data.elem.value);
          // console.log(data.elem.othis);
        // }
        // return false;

        if(this.phone == ''){
          layer.alert('请输入你的手机号');
          return false;
        }
        if(!this.checkPhone(this.phone)){
          layer.alert('手机号格式不正确');
          return false;
        }
        if(this.msg_send_mark != 1 ){
          layer.alert('请先获取短信');
          return  false;
        }
        if(this.msg_code == ''){
          layer.alert('短信验证码不能为空');
          return false;
        }
        if(this.psd == ''){
          layer.alert('密码不能为空');
          return false;
        }
        if(this.psd.length < 6){
          layer.alert('密码最少6位');
          return false;
        }
        if(this.psd != this.repsd){
          layer.alert('两次密码输入不一致');
          return false;
        }
        let api_req = {
          phone :this.phone,
          password:this.psd,
          mag_code:this.msg_code,
          tt:1
        }


        this.$http.post('/api/getImgUrl').then(success=>{
          if(success.body.status == 200){
            layer.alert('注册成功,GOGOGO--去登陆');
            this.$router.push({name:'Login'});
          }else{
            layer.alert(success.body.msg);
            return false;
          }
        },error=>{
          layer.alert('注册失败,请重试');
          return false;
        })
      }
    },
    mixins:[ Common ],
    mounted(){
      // let api_req ={
      //   sid:this.sid,
      //   user_img_code:this.user_img_code,
      //   phone:this.phone,
      //   type:1
      // };
      this.$http.post('/api/getImgUrl').then( success =>{
        this.img_code=success.body.data.url
        this.sid=success.body.data.sid
      },error=>{
        layer.msg('请求失败,请重试');
      })
      console.log(this);
      layui.use('index',function(){
        var index=layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
      });
    }
  }
</script>

<style scoped>

</style>

