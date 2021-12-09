import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from '../components/page/second.vue';

Vue.prototype.$axios = axios;
Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => h(App)
})
