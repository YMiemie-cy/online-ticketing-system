import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios
import axios from './plugins/axios.js'

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  data:{
    movieList: []
  },
  render: h => h(App),
  router,
  axios,
  methods: {
    showDetail() {
      console.log('hello');
    },
    getCurrentIdList(id){
      return this.movieList.filter(item => {
      if (item.id == id) {
        return item;
      }
    })[0];
      
    }
  }
}).$mount('#app')