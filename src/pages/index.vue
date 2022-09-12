<template>
  <div id="index">
    <MovieList />
    <Ranking />
  </div>
</template>

<script>
import MovieList from '../components/movieList.vue';
import Ranking from '../components/ranking.vue';

export default {
  name: 'index',
  data() {
    return {};
  },
  components: {
    MovieList,
    Ranking,
  },
};
</script>

<style scoped>
#index {
  display: flex;
  justify-content: space-between;
}
</style>
