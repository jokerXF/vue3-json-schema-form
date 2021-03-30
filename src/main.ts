import { createApp, defineComponent, h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
//import App from './App.vue'
const img = require('./assets/logo.png')//eslint-disable-line
//import image from './assets/logo.png'
const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', {
        alt: 'vue logo',
        src: img,
      }),
      h(HelloWorld, {
        msg: 'Welcome to Your Vue.js + TypeScript App',
      }),
    ])
  },
})
createApp(App).mount('#app')
