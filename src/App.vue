<template>
  <div id="app">
    <Header></Header>
     <router-view></router-view>
    <div class="footer">
      <div class="left">
        <h5>@2018bt0.com </h5>
      </div>
      <div class="right">
        <h5>BT天堂&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;悟空视频&nbsp;&nbsp;&nbsp;&nbsp;同步影院&nbsp;&nbsp;&nbsp;&nbsp;小书屋&nbsp;&nbsp;&nbsp;&nbsp;搞笑图&nbsp;&nbsp;&nbsp;&nbsp;奇迹秀 </h5>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      // imgs: require ("static/logo-light.png")
    }
  },

}
</script>
