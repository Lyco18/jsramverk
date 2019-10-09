<template>
<main>
    <Nav />
    <h2>FORM</h2>
    <form>
        <label class="input-label">Namn<br>
            <input type="text" name="name" class="input-field" required>
        </label><br>

        <label class="input-label">Födelsedag<br>
            <!-- <input type="date" name="birthday" class="input-field" required/> -->
            <date-picker v-model="date" lang="eng" type="date" format="YYYY-MM-DD"></date-picker>
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
import DatePicker from 'vue2-datepicker';

export default {
    name: 'app',
    props: { },
    components: {
        Nav,
        DatePicker,
    },
    data() {
        return {
            date: ""
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

.input-field:focus {
    outline: 2px solid #9e7cd7;
}

</style>
