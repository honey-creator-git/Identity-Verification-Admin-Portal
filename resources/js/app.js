/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
// import VueI18n from 'vue-i18n'
import router from './router.js'
import utils from './helpers/utilities'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faUserSecret,
  faUsers,
  faUser,
  faIndustry,
  faEdit,
  faTrash,
  faArrowRight,
  faQrcode,
  faComment,
  faDownload,
  faCity,
  faArrowLeft,
  faAnglesLeft
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faUsers)
library.add(faUser)
library.add(faIndustry)
library.add(faEdit)
library.add(faTrash)
library.add(faArrowRight)
library.add(faQrcode)
library.add(faComment)
library.add(faDownload)
library.add(faCity)
library.add(faArrowLeft)
library.add(faAnglesLeft)

require('./bootstrap')

Vue.prototype.$utils = utils

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
  router,
  // Theme Swiching Demo Component (You can remove it if not required)
  // components: {
  //   ThemeSwitcher
  // }
}).$mount('#app')
