<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://rsms.me/inter/inter-ui.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}

.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #c2b4e2;
    border-top: 4px solid #9e7cd7;
    color: white;
}

nav {
    text-align: center;
    text-transform: uppercase;
}

h1 {
    font-size: 8em;
    font-weight: 100;
}

h2 {
    font-size: 4em;
    font-weight: 100;
}

p {
    font-size: 2em;
    font-weight: 350;
}
</style>
