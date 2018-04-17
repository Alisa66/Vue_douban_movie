<template>
  <div>
    <div v-for="item in movie">
     <p> {{item.name}}</p>
      <p> {{item.gifts}}</p>
    </div>
  </div>

</template>
<script>
  export default {
    data(){
      return{
        movie:[]
      }
    },

    mounted: function () {
      this.$nextTick( () => {
        this.createView()
      })
      // 或者写成 this.createView() this代表vm实例
    },
    methods:{
      createView:function () {
        this.$http.get('./static/f.json').then(response=>{
          this.movie= response.data.result.list
        },(err)=>{
          console.log("3444")
        })
      }
    }
  }
</script>
