import { createApp } from 'vue'
import App from './App.vue'

import { Button } from 'ant-design-vue';
import "ant-design-vue/dist/antd.less";
import "./assets/theme/app-theme.less";

const app = createApp(App);

app.use(Button)
app.mount('#app')
