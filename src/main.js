import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import "./assets/js/jquery-3.6.0.min.js";


createApp(App).use(router).mount('#app')

// 라우트 변경 후 스크립트 실행
import { fmdcTempMethods } from "./assets/js/sample.js";
//  initTextfield();
router.afterEach(() => {
    setTimeout(() => {
        console.log('📌 라우트 변경 완료, initTextfield 실행');
        fmdcTempMethods();
    }, 0);
});
