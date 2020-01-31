<template>
  <div>
      <p>用户名:<van-field v-model="user" placeholder="请输入用户名" /></p>
      <p>密码:<van-field v-model="pwd" placeholder="请输入密码" /></p>
      <van-button type="primary" @click="handleClick">登录</van-button>
      <van-button type="primary" @click="handleReg">注册</van-button>
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
        handleClick(){
            this.Api('post','/login',{username:this.user,password:this.pwd}).then(res=>{
                if(res.data.code===1){
                    alert(res.data.msg)
                    localStorage.setItem('token',res.data.token)
                    this.$router.push('/home')
                }
            })
        },
        handleReg(){
            this.$router.push('/register')
        }
    }
}
</script>

<style>

</style>