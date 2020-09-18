import Vue from 'vue'           //从mode_modules引入vue包
import App from './App'         //引入APP.vue
import router from './router'   //引入router下的index.js
import "@/assets/css/head.css"   //引入APP.vue的css样式



//创建一个vue实例，将APP.vue挂载到index.html上显示
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
