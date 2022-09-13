<template>
  <div id="classification">
    <ClassificationBar />
    <MovieList />
  </div>
</template>

<script>
import ClassificationBar from '../components/classificationBar.vue';
import MovieList from '../components/movieList.vue';

export default {
  name: 'classification',
  data() {
    return {};
  },
  components: {
    ClassificationBar,
    MovieList,
  },
};
</script>

<style scoped></style>
