<template>
<main>
    <Nav />
    <h2>FORM</h2>
    <form>
        <label class="input-label">Namn<br>
            <input type="text" name="name" class="input-field" required>
        </label><br>

        <label class="input-label">Födelsedag<br>
            <input type="date" name="birthday" class="input-field" required/>
        </label><br>

        <label class="input-label">E-post<br>
            <input type="text" name="email" class="input-field" required>
        </label><br>

        <label class="input-label">Lösenord<br>
            <input type="password" name="password" class="input-field">
        </label><br>

        <label class="input-label"><br>
            <input type="checkbox" name="gdpr">&nbsp;Jag godkänner
        </label><br>

        <input type="submit" value="Register">
    </form>
</main>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Form',
  props: { },
  components: {
      Nav,
  },
  data() {
  return {
    attributes: [
      {
        key: 'today',
        highlight: true,
        dates: new Date()
      }
    ]
    }
  }
}
</script>

<style scoped>
input.input-field {
    position: relative;
    display: inline-block;
    width: 210px;
    color: #73879c;
    font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', sans-serif;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
</style>
