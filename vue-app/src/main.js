import Vue from 'vue';
import store from './store';

import App from './App.vue';

// Outside click event
Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
    window.event = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', window.event);
  },
  unbind: function() {
    document.body.removeEventListener('click', window.event);
  }
});

new Vue({
  el: '#wp-vue-app',
  store,
  render: h => h(App)
});
