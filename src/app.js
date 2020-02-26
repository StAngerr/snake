import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
const myAr = [1, 2, 3 ,4];

myAr.forEach((i) => console.log(i));
