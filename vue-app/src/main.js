import Vue from 'vue';
import App from './App.vue';


if (document.getElementById('vueWp')) {
  new Vue({
    el: '#vueWp',
    render: h  => h(App)
  })
}
