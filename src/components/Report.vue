<template>
<main>
    <Nav />
    <h2>Reports</h2>
    <p>Project setup</p>
    <br>
    <h3>
        This will install folders with necessary modules. To start up the project you go to your project catalogue and write following:
    </h3>
    <h3>
        $ npm install
    </h3>
    <br>
    <p>Compiles and hot-reloads for development</p>
    <br>
    <h3>
        Prior to compile, make sure XXAMP is running apache. As this is running on your localhost. In this case, localhost:8080. The following line will automatically update changes, and check your code for errors.
    </h3>
    <h3>
        $ npm run serve
    </h3>
    <br>
    <p> Compiles and minifies for production</p>
    <br>
    <h3>
        The script "build" and create a script which runs your application.
    </h3>
    <h3>
        $ npm run build
    </h3>
    <br>
    <p> Run your tests </p>
    <br>
    <h3>
        Unit test runner.
    </h3>
    <h3>
        $ npm run test
    </h3>
    <br>
    <p> Lints and fixes files </p>
    <h3>
        Flags for any programming errors and bugs.
    </h3>
    <h3>
        $ npm run lint
    </h3>

</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Report',
  components: {
    Nav,
  },
  data() {
    return {
      text: "",
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
