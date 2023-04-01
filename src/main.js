import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faDownload, faPhone, faAnglesRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'



import App from './App.vue'
import router from './router'


library.add(
  faDownload,
  faEnvelope,
  faFacebook,
  faPhone,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faAnglesRight
)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
