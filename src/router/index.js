// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import LogIn from "../components/LogIn"
import MainPage from "../components/MainPage"
import StudyPage from "../components/StudyPage"
// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name: "MainPage",
      path: "/main_page",
      component:MainPage,
      children:[
        {
          name:"StudyPage",
          // 注意这里的studypage是二级路由，不加斜杠
          path:"study_page",
          component: StudyPage
        }
      ] 
    },
    {
      // 定义路由需要指向的组件
      name: "LogIn",
      path: "/",
      component: LogIn
    },
    // {
    //   name: "StudyPage",
    //   path: "/study_page",
    //   components: { StudyPage }
    // }

  ]

})