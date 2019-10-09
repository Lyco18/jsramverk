<template>
<main>
    <Nav />
    <h2>Report 2</h2>
    <p>Github</p>
    <h3><a href="https://github.com/Lyco18/jsramverk.git">Lydias Repo</a></h3>
    <br>

</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Report2',
  components: {
    Nav,
  },
  data() {
    return {
      text: [
      'npm run serve',
      'npm run build',
      'npm run test',
      'npm run lint'
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.question {
  margin-bottom: 2em;
}
</style>
