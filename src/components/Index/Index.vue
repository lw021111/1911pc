<template>
    <div class="micronews">

  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <router-link to='/'>
          <img src="@/assets/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </router-link>
      </h1>
      <p class="nav">
        <router-link to='/'  class="active">最新</router-link>
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
              <input type="text" name="title" placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
              <router-link to='/Search'><button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button></router-link>

            </div>
          </div>
        </form>
      </div>
      <div class="login">
        <router-link to='/Login'>登录</router-link>
        ||<router-link to='/Reg'>注册</router-link>

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


  <div class="layui-fulid micronews-banner w1000">
    <div class="layui-carousel imgbox" id="micronews-carouse">
      <div carousel-item>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/static/images/news_img1.jpg"></a>
        </div>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/static/images/news_img1.jpg"></a>
        </div>
      </div>
    </div>
  </div>


  <div class="micronews-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="list-item" id="LAY_demo2">

              <div class="item" v-for="(v,k) in t_list">
                <a href="">
                <img :src="v.news_image" height="30" width="30">
                </a>
                <div class="item-info">
                  <h4><a @click="href(v.news_id)">{{v.news_title}}</a></h4>
                  <div class="b-txt">
                    <span class="label">{{v.cate_name}}</span>
                    <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      {{v.comment_count}}条
                    </span>
                    <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                        {{v.publish_time}}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
          <div class="popular-info">
            <div class="layui-card">
              <div class="layui-card-header">
                <h3>热门资讯</h3>
              </div>
              <div class="layui-card-body">
                <ul class="list-box" v-for="(v,k) in t_news">
                  <li class="list">
                    {{k+1}}
                     <a @click="href(v.news_id)">{{v.news_title}}</a><i class="heat-icon"></i>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div class="micronews-footer-wrap">
        <div class="micronews-footer w1000">
          <div class="ft-nav">
            <a href="#">关于我们</a>
            <a href="#">合作伙伴</a>
            <a href="#">广告服务</a>
            <a href="#">常见问题</a>
          </div>
          <div class="Copyright">
            <span>Copyright&nbsp;</span>&nbsp;&copy;<span>新闻网&nbsp;&nbsp;</span><span>赣ICP备12345678号</span>
          </div>
          <div class="f-icon">
            <a href="#" class="w-icon">
              <img src="@/assets/static/images/wechat_ic.png">
            </a>
            <a href="#" class="wb-icon">
              <img src="@/assets/static/images/qq_ic.png">
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import "@/assets/layui/css/layui.css"
  import "@/assets/static/css/main.css"



    export default {
        name: "Index",

        data() {
            return {
                t_list: [],
                t_news:[]
            }
        },
        methods:{
            href:function (news_id) {
                this.$router.push({path:'/Detail',query:{news_id:news_id}});
            }
        },
        mounted() {
            layui.use('index', function () {
                var index = layui.index;
                index.banner()
                index.seachBtn()
                index.arrowutil()
            });
            //layer.alert(111);
            this.$http.get('/api/newsList').then(response => {
                this.t_list=response.body.data;
            }, error => {
                alert('调用接口失败');
            });

            this.$http.get('/api/wifiList').then(response => {
                this.t_news=response.body.data;
            }, error => {
                alert('热点资讯调用接口失败');
            });
        },

    }

</script>

<style scoped>

</style>
