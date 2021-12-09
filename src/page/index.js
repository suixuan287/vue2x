import Vue from 'vue';
import axios from 'axios';
import App from '../components/page/index.vue';
import store from '../common/indexStore'

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
