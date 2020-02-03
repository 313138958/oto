import axios from 'axios';
<template>
  <div class="home">
    <div class="box" v-for="item in list" :key="item.id">
      <p @click="$router.push({name:'detail',params:{id:item.id}})">{{item.title}}</p>
      <img :src="item.cont" alt="">
    </div>
  </div>
</template>

<script> 
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getlist" });
  }
};
</script>
<style>
.box{
  width: 100%;
  height: 200px;
  text-align: center;
  position: relative;
}
.box p{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  margin-top: 5px;
  z-index: 1;
  color: salmon;
}
.box img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
}
</style>