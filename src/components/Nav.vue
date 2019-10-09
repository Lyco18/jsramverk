<template>
<nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/form">Form</router-link></li>
        <li><router-link to="/reports/week/1">Week one</router-link></li>
        <li><router-link to="/reports/week/2">Week two</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Me',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
}

li {
    display: inline;
    margin-right: 1em;
}

li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}

li a:hover {
    text-decoration: underline;
}
</style>
