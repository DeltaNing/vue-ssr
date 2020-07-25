<template>
    <div id="app">
        <h1>hello SSR</h1>
        <input type="text" v-model="val">
        <p> {{ val }} </p>

        <router-link to="/home">home</router-link>
        <router-link to="/room">room</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import hello from './components/hello.vue'
export default {
    name: 'app',
    data() {
        return {
            val: 'hello 123'
        }
    }
}
</script>