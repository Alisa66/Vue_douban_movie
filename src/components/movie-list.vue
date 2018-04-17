<template>
<div class="content">
    <div class="layout">
      <Header></Header>
      <div class="title">
        bt0.com 不太灵
      </div>
      <div class="movie_list">
        <div class="list" v-for="item in msg.subjects">
          <div class="movies">
            <router-link tag="a" :to="{ name:'moviedetail',
                                  params:{id:'moviedetail'},
                                  query:{movieid:(item.id)} }">
              <img :src="item.images.medium" alt=""/>
            </router-link>
          </div>
          <div class="introduce">
            <p>{{item.title}}&nbsp;&nbsp; {{item.rating.average}}</p>
          </div>
        </div>

      </div>
      <div style="clear: both"></div>
    </div>
</div>
</template>
<script>
  import Header  from '../components/Head'
  export default {
    components:{
      Header
    },
    data() {
      return {
        msg:[]
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.getMovieList()
      })
    },
    methods:{
      getMovieList:function () {
        var _this = this;
        //获取数据
        _this.axios.get("movie/top250").then(response=>{
          this.msg = response.data
        },err =>{
          console.log("dadfa")
        })
      },

    }
  }
</script>
<style>

</style>
