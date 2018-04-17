<template>
<div>
  <h1>Bt0.com</h1>
  <div class="grid" >
    <!--grid-sizer不能删除 删除之后只会显示grid-item-->
    <div class="grid-item" v-for="item in msg.subjects">
      <img :src="item.images.medium" alt="" />
    </div>
  </div>
</div>
</template>
<script>
  import $ from 'jquery'
  import Masonry from 'masonry-layout'
  import imagesLoaded from 'imagesloaded'
  export default {
    data() {
      return {
        msg:[]
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.getImg();
        this.masonry_init();
      })
    },
    methods:{
      getImg:function () {
        var _this = this;
        //获取数据
        _this.axios.get("movie/top250").then(response=>{
          this.msg = response.data;
          console.log(this.msg)
        },err =>{
          console.log("dadfa")
        })
      },
      masonry_init:function () {
        var msnry = new Masonry( '.grid', {
          columnWidth: '.grid-item',
          itemSelector: '.grid-item',
          percentPosition: true
        });
        imagesLoaded( document.querySelector('.grid-item'), function(  ) {
           msnry.masonry("layout")
          console.log('all images are loaded');
        });

        // var $grid = $('.grid').masonry({
        //   itemSelector: '.grid-item',
        //   columnWidth: '.grid-sizer',
        //   percentPosition: true
        // });
        //  msnry.imagesLoaded().progress(function () {
        //  $grid.masonry('layout')
        // })
      }
    }
  }

</script>
<style scoped>
  * { box-sizing: border-box; }
  body { font-family: sans-serif; }
  /* ---- grid ---- */
  .grid {
    max-width: 1200px;
    margin: 20px auto;
  }
  /* clearfix */
  .grid:after {
    content: '';
    display: block;
    clear: both;
  }
  /* ---- grid-item ---- */
  .grid-sizer, .grid-item {
    width:20%;
    margin-right: 5%;
    margin-top: 3%;
  }
  .grid-item {
    float: left;
  }
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
