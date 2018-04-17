<template>
  <div>


    <div class="header">
      <div class="slide">
        <ul>
          <router-link tag="a" to="/index">
            <img   class="logo"  src=" /static/logo-light.png" alt=""/>
          </router-link>
          <!--<img class="logo" :src="imgs" alt="" />-->
          <li>
            <router-link tag="a" to="/movielist/moviedown" >
              <h4>电影下载</h4>
            </router-link>

          </li>
          <li><h4>电视剧下载</h4></li>
          <li><h4>搜索</h4></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="layout" >
        <div class="movie_detail">
          <img :src="imagesArray.medium" alt="" />
        </div>
        <div class="movie_detail">
          <p class="info-title">{{moviedetails.title}}</p>
          <p>豆瓣评分 : <span style="font-size: 2em;font-weight: 700;color:#fc9b35;">{{ratingArry.average}}</span></p>
          <p>又名:&nbsp;&nbsp;{{nameArray[2]}}</p>
          <p>上映日期:&nbsp;&nbsp; {{moviedetails.year}}</p>
          <p>类型:&nbsp;&nbsp; {{String(moviedetails.genres)}}</p>
          <p>上映地区:&nbsp;&nbsp; {{String(moviedetails.countries)}}</p>
          <p>种子资源数:&nbsp;&nbsp; 22</p>
          <div class="torrent-nav">
            <span class="about">
              查看演员相关信息
            </span></div>
        </div>

        <div class="movie_detail">
          <div class="description">
          <span class="summary-title">剧情</span>
            　<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{moviedetails.summary}}</span>
          </div>
        </div>
      </div>
      <div style="clear: both"></div>
      <div class="source" style="width: 100%;height: 10vh;background-color: cadetblue;">
           <h1 style="color: #fff;text-align: center">这里资源下载链接</h1>
      </div>

    </div>
  </div>




</template>
<script>
  export default {
    data(){
      return{
        id:Number,
        moviedetails:[],
        // 用来存放图片数组
        imagesArray:[],
        // 电影又名存放数组
        nameArray:[],
        // 电影评分
        ratingArry:[]

      }
    },
  created(){
      var _this = this;
      _this.id  = this.$route.query.movieid;
  },
    mounted: function () {
      this.$nextTick(() => {
        this.getdetialid(this.id)
      })
    },
    methods:{
      getdetialid:function (id) {
          var _this = this;
          //获取数据
          _this.axios.get("movie/subject/"+id).then(response => {
            this.moviedetails = ( response.data);
            this.imagesArray = response.data.images;
            this.nameArray = response.data.aka
            this.ratingArry = response.data.rating

          }, err => {
            console.log("dadfa")
          })
      }
    }

  }

</script>
<style scoped>
 .content{
   background-color: green;
 }
  .layout{
    height: 400px;
    margin: 0 auto;
    width: 80%;
  }
  .movie_detail {
    width: 24.3%;
    height: 46vh;
    float: left;
    margin-top: 3%;
    margin-left: 7%;
    margin-bottom: 2%;
    border-radius: 4px;
  }
.info-title{
  font-size: 2em;
  font-weight: 700;
  color: #cea588 !important;
  display: table-cell;
  padding-bottom: 0.6em;
  border-bottom: 4px solid rgba(175,120,102,0.4);
  margin-bottom: .6em;
}
  .movie_detail p {
    padding: 10px;
    color: #af7874;
    text-align: left;

  }

  .movie_detail:nth-child(2) {
    margin-left: 10px;
  }
  .movie_detail img{
    border-radius: 4px;
  }

  .description {
    color: #98599c !important;
    line-height: 2em;
    overflow:hidden;
    width: 100%;
    height: 46vh;
    text-align: left;
  }
  .summary-title{
    font-size: 2.2em;
    font-weight: 700;
    color: #98599c !important;
    margin-bottom: .5em;
    display: block;
  }
  .torrent-nav{
    margin-top: 1.4em;
    border-bottom: 4px solid rgba(152,89,156,0.4);
    padding-bottom: 2em;
    text-align: left;
    color: #fff;
  }
  .about{
    padding: 0.3em 0.6em;
    border-radius: 4px;
    text-decoration: none;
    font-size: 12px;
    border: 1px solid #949494;
    background: transparent;
    color: #e4e4e4 !important
  }
</style>
