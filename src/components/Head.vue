<template>
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
</template>
<script>
  export default
  {
    data(){
      return{

      }
    }
  }
</script>
