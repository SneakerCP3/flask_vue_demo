<template>
  <el-card>
    <img :src="imgSrc" class="image" />
    <div class="cardBottom">
      <span class="msg">{{msg}}</span>
      <el-button type="text" class="button" @click="openUrl">
        <span class="detail">Go to detail</span>
      </el-button>
    </div>
  </el-card>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    openUrl() {
      window.open(this.url);
    }
  },
  props: ["imgSrc", "msg", "url"]
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.el-card{
  width: 150px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.msg {
  font-size: 14px;
  font-weight: bold;
  color: black;
}

.detail {
  font-size: 12px;
  color: blue;
}
</style>
  