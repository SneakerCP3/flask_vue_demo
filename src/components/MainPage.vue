<template>
  <div>
    <el-header>
      <el-row type="flex" justify="space-around" style="align-items: center">
        <el-col :span="4" type="flex" align="center">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">学习</el-menu-item>
            <el-menu-item index="3"><router-link to="/study_page">娱乐</router-link></el-menu-item>
            <el-menu-item index="4">其他</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <el-input v-model="searchBox" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer><span color="white">Copyright ©2022-2122 来福er</span>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
      return {
        // activeIndex: '1',
        // activeIndex2: '1',
        searchBox:""
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>
.el-header {
  text-align: center;
  line-height: 60px;
  background-color: #545c64;
}

.el-footer {
  text-align: center;
  line-height: 60px;
  background-color: #545c64;
}

.el-main {
  /* background-color: #e9eef3; */
  padding: 0px !important;
  /* background-image: url(../assets/main_area_bg_img.jpg); */
  /* opacity: 0.2; */
  /* color: #333; */
  text-align: center;
  min-height: calc(100vh - 121px);
}

body > .el-container {
  margin-bottom: 40px;
}

span{
    color: #e9eef3;
    font-size: 13px;
}


</style>