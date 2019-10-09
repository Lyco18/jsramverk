<template>
<main>
    <Nav />
    <h2>Report 2</h2>
    <p>Github</p>
    <h3><a href="https://github.com/Lyco18/jsramverk.git">Lydias Repo</a></h3><br>
    <p>Insperation till formulär och date picker</p>
    <h3>Målet med den valda date picker:n var att den skulle vara enkel, och matcha med resterande sidan. Alltså, samma färgschema och stilren helt enkelt. Det är en färg i två nyanser som används samt svart och vit. Input fälten är avrundade runt hörnen, och har en genomskinlig skugga bakom så att fälten blir lite renare och inte lika hårda. När fälten är fokuserade, alltså klickade på och användaren skriver in data, så kommer samma mörka lila färg upp som en outline runt fältet. </h3>
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
