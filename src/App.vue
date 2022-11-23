<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getMovies } from './api';

export default {
  name: 'App',
  components: {},
  async created() {
    this.$root.$on('showDetail', id => {
      console.log('helloAPP', id);
      this.$router.push(`/home/detail/${id}`);
    });

    if (this.$route.path === '/home/index') {
      // 获取电影信息
      const res = await getMovies();
      console.log('APP', res.data);
      this.$root.movieList = res.data;
    }
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
