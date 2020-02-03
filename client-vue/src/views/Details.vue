<template>
  <div>
      <van-search v-model="keyword" placeholder="请输入搜索关键词" />
      <div v-for="item in list.filter(jtem=>jtem.header.indexOf(keyword)!== -1)" :key="item.id">
          <p>{{item.header}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            keyword:''
        }
    },
    created(){
       if(this.$route.params.id!==undefined){
           localStorage.setItem('counId',this.$route.params.id)
       }
      this.Api('post','/getdetails',{id:localStorage.getItem('counId')}).then(res=>{
          this.list = res.data.result
      })
    }
}
</script>

<style>

</style>