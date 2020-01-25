import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    message: 'Algunos eventos en VueJS'     
  },
  methods:{
    event(type) {	 
      switch(type) {
        case 'click': 
          return this.message = 'Button Clicked';
      }
    }
  }
}).$mount('#app')
