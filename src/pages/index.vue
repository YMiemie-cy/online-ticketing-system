<template>
  <div id="index">
    <MovieList :classify="classify" />
    <Ranking />
  </div>
</template>

<script>
import MovieList from '../components/movieList.vue';
import Ranking from '../components/ranking.vue';

export default {
  name: 'index',
  data() {
    return {
      classify: {
        type: '全部',
        region: '全部',
        period: '全部',
      },
    };
  },
  components: {
    MovieList,
    Ranking,
  },
  created() {},
};
</script>

<style scoped>
#index {
  display: flex;
  justify-content: space-between;
}
</style>
