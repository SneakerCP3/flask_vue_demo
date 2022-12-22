<template>
  <div>
    <AddrCardVue
      v-for="website in websites"
      :key="website.id"
      :imgSrc="website.imgSrc"
      :msg="website.msg"
      :url="website.url"
      style="margin:20px; padding:20px"
    ></AddrCardVue>
  </div>
</template>
  
<script>
import AddrCardVue from "./AddrCard.vue";
export default {
  name: "StudyPage",
  data() {
    return {
      websites: [
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          msg: "testMsg1",
          url: "https://www.baidu.com"
        },
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          msg: "testMsg1",
          url: "https://www.baidu.com"
        },
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          msg: "testMsg1",
          url: "https://www.baidu.com"
        },
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          msg: "testMsg1",
          url: "https://www.baidu.com"
        }
      ]
    };
  },
  components: {
    AddrCardVue
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
  