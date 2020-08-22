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
      <h3>登录</h3>
      <div class="wrap">
        <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text" name="" lay-verify="required|phone" v-model="phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="password" name="" lay-verify="required|phone" v-model="password" id="password" placeholder="请输入密码" autocomplete="off" class="layui-input">
            </div>
          </div>

          <div class="layui-form-item agreement">
            <div class="layui-input-block">
              <input type="checkbox" name="like1[write]" lay-verify="required" lay-skin="primary" title="我已阅读并同意" checked="">
              <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>

            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" @click="login">登录</button>
            </div>
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit lay-filter="*" onclick="return false"><router-link to='/Reg'>注册</router-link></button>

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
<<<<<<< HEAD
        mixins:[ Common ],
      mounted(){
          this.alert();
      }
=======
        data () {
            return{
                password:"",
                phone:""
            }
        },
        methods:{
             login:function() {
                if(this.phone==""){
                    alert("手机号不能为空");
                    return false;
                }
              let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                  if(!reg.test(this.phone)){
                      alert("手机号格式错误");
                      return false;
                  }
                 let passwords=/^\d{6,}$/;
                if(this.password==""){
                    alert("请输入密码");
                    return false;
                }
                if(!passwords.test(this.password)){
                    alert("密码格式错误,最少6位纯数字");
                    return false;
                }

                let api_login={
                    phone:this.phone,
                    password:this.password
                };
                this.$http.post('/api/login',api_login).then(response=>{
                    if(response.body.error==200){
                        alert(response.body.msg);
                    }else{
                        alert(response.body.msg);
                        return false;
                    }
                },error => {
                    alert("请求失败,请重试");
                    console.log(error);
                });
            }
        },
        // method(){
        //     this.http.post("/api/login").then(success=>{
        //
        //     },error => {
        //         layui.layer.msg("请求失败,请重试");
        //     })
        // }
>>>>>>> 16a34082782b0db3c6b00c6e5db5f39a4c73eb35
    }

</script>

<style scoped>

</style>
