// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//add element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'

// require styles
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import '_vue-quill-editor@3.0.5@vue-quill-editor/node_modules/quill/dist/quill.core.css'
import '_vue-quill-editor@3.0.5@vue-quill-editor/node_modules/quill/dist/quill.snow.css'
import '_vue-quill-editor@3.0.5@vue-quill-editor/node_modules/quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
