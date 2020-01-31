<template>
  <div>
      <p>用户名:<van-field v-model="user" placeholder="请输入用户名" /></p>
      <p>密码:<van-field v-model="pwd" placeholder="请输入密码" /></p>
      <van-button type="primary" @click="handleReg">提交</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:'',
      pwd:''
    }
  },
  methods:{
     handleReg(){
      if(this.user===""){alert('用户名不能为空')}
      if(this.pwd===""){alert('密码不能为空')}
      this.Api('post','/register',{username:this.user,password:this.pwd}).then(res=>{ 
          if(res.data.code!==1){
            alert(res.data.msg)
            return
          }
            alert(res.data.msg)
            this.$router.push('/login')
          
      })
      
    }
  }
}
</script>

<style>

</style>