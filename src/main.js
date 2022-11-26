import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入axios
import axios from "./plugins/axios.js";

// 引入vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  data: {
    movieList: [],
    buyTicket: [],
  },
  render: (h) => h(App),
  router,
  axios,
  methods: {
    showDetail() {
      console.log("hello");
    },
    getCurrentIdList(id, index) {
      return this.movieList.filter((item) => {
        if (!index) {
          if (item.id == id) {
            return item;
          }
        } else {
          if (item.id == id) {
            item.location = item.location.map((item2, index2) => {
              if (index2 == index) {
                return item2;
              }
            });
            return item;
          }
        }
      })[0];
    },
  },
}).$mount("#app");
