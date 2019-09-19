<template>
<main>
    <Nav />
    <h2>Me - Lyds</h2>
    <p>{{ text }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: "Äventyrare fast i Australien. Iår så har jag betat av 8 länder och vart ombord 18 flygplan."
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
