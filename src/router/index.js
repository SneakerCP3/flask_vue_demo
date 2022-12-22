// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import LogIn from "../components/LogIn"
import MainPage from "../components/MainPage"
import StudyPage from "../components/StudyPage"
// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:"/main_page",
      component:MainPage
    },
    {
      // 定义路由需要指向的组件
      path:"/",
      component:LogIn
    },
    {
      path:"/study_page",
      component:StudyPage
    }

  ]
})