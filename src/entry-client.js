import createApp from './app.js';

const { app } = createApp();

window.onload = function () {
    app.$mount('#app');
}