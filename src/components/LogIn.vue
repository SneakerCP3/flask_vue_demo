<template>
  <div class="login">
    <div class="loginBox">

      <div class="login_title">用户登录</div>
      
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <el-form-item label="" prop="password">
          <el-input v-model="form.password" show-password placeholder="请输入密码" prefix-icon="el-icon-goods"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-checkbox v-model="form.remember" label="true">记住密码</el-checkbox>
        </el-form-item>

        <el-form-item label="">
          <el-button type="primary" @click="login" :style="{width:'145px'}">登录</el-button>
          <el-button @click="reset" :style="{width:'145px'}">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        username: "",
        password: "",
        remember: false
      },
      rules:{
        username:[
          { required: true, message: '用户名不能为空', trigger: 'blur'},
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login() {
      var that = this;
      axios({
        method: "post",
        url: "http://127.0.0.1:5000/login",
        data: { username: that.form.username, password: that.form.password }
      }).then(response => {
        // console.log(response.data);
        if (response.data.res === true) {
          this.$router.push({name:"MainPage"})
        } else {
          alert("failed");
        }
      });
    },
    reset() {
      this.form = {};
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background-position: center;
  background-image: url(../../src/assets/login_bg_img.jpg);
}

.loginBox{
  float: right;
  width: 300px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-right: 100px;
  margin-top: 150px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #ddd;
}

.login_title{
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>
